import { uniqBy } from 'lodash'
import LottieView from 'lottie-react-native'
import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import { FlatListProps, RefreshControl, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import listLoading from '../assets/lottie/list_loading.json'
import { BoxProps } from '../types/common-props'
import { CursorDataProvider, OffsetDataProvider } from '../types/data-provider'
import {
  excludeBoxProps,
  extractBoxMarginStyles,
  extractBoxPaddingStyles,
  extractFlexStyles
} from '../utils'
import FadeInView from './FadeInView'
import Separator from './Separator'

type DataPipe = (list: any[], data: any[]) => any[]

export const defaultPipe = (list: any[], data: any[]) => uniqBy([...list, ...data], '_id')
export const invertedPipe = (list: any[], data: any[]) => uniqBy([...data, ...list], '_id')

const BOTTOM_SPACE = getBottomSpace()

interface Props extends BoxProps, Partial<FlatListProps<any>> {
  dataProvider: CursorDataProvider | OffsetDataProvider
  pollingDataProvider?: CursorDataProvider | OffsetDataProvider
  dataPipe?: DataPipe
  allowRefresh?: boolean
  onRefresh?: () => void
  fadeIn?: boolean
  enableBottomSpace?: boolean
}

export default memo(forwardRef((props: Props, ref: any) => {
  const {
    dataProvider,
    pollingDataProvider,
    dataPipe = defaultPipe,
    renderItem,
    ListEmptyComponent,
    allowRefresh = true,
    onRefresh,
    fadeIn,
    enableBottomSpace,
    inverted,
    horizontal,
    contentContainerStyle,
    style,
    ...restProps
  } = props

  const [isBusy, setBusy] = useState(false)
  const [isRefreshing, setRefreshing] = useState(false)
  const [list, setList] = useState([])

  const refresh = useCallback(async (pipe: DataPipe = dataPipe) => {
    if (onRefresh) {
      onRefresh()
    }

    setRefreshing(true)
    const results = await dataProvider.refresh()
    setList(pipe([], results))
    setRefreshing(false)
    return results
  }, [])

  const next = useCallback(async (pipe: DataPipe = dataPipe) => {
    setBusy(true)
    const results = await dataProvider.next()
    setList(current => pipe(current, results))
    setBusy(false)
    return results
  }, [])

  const poll = useCallback(async (pipe: DataPipe = dataPipe) => {
    if (!pollingDataProvider) {
      throw new Error('Polling DataProvider is undefined')
    }

    const results = await pollingDataProvider.poll()
    setList(current => pipe(current, results))
    return results
  }, [])

  const renderItemCallback = useMemo(() => fadeIn ? (data: any) => (
    <FadeInView duration={150}>{renderItem(data)}</FadeInView>
  ) : renderItem, [])

  const keyExtractor = useCallback((item, index) => item._id + String(index), [])

  const footerComponent = useCallback(() => (
    <View style={{ alignItems: 'center' }}>
      {
        isBusy && (
          <LottieView
            style={{
              width: 150,
              height: 150
            }}
            autoPlay={true}
            source={listLoading as any}
          />
        )
      }

      {
        (enableBottomSpace && !inverted && BOTTOM_SPACE > 0) && (
          <Separator height={BOTTOM_SPACE} />
        )
      }
    </View>
  ), [isBusy])

  useEffect(() => {
    next()
  }, [])

  const flatListRef = useRef(null)

  useImperativeHandle(ref, () => ({
    refresh,
    next,
    poll,
    mutate: setList,
    list,
    backToTop: () => {
      flatListRef.current.scrollTo(0)
    }
  }))

  return (
    <FlatList
      ref={flatListRef}
      refreshControl={
        (!horizontal && allowRefresh) && (
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refresh}
          />
        )
      }
      ListFooterComponent={horizontal ? null : footerComponent}
      ListEmptyComponent={isBusy ? null : ListEmptyComponent}
      onEndReached={() => next()}
      onEndReachedThreshold={0.1}
      data={list}
      keyExtractor={keyExtractor}
      renderItem={renderItemCallback}
      removeClippedSubviews={false}
      horizontal={horizontal}
      inverted={inverted}
      contentContainerStyle={[
        {
          ...((!isBusy && list.length === 0) && {
            flex: 1
          })
        },
        extractBoxPaddingStyles(props),
        contentContainerStyle
      ]}
      style={[
        extractBoxMarginStyles(props),
        extractFlexStyles(props),
        style
      ]}
      {...excludeBoxProps(restProps)}
    />
  )
}))
