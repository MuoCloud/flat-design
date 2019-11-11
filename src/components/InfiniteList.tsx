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
import {
  LayoutChangeEvent,
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  View,
  ViewStyle
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import listLoading from '../assets/lottie/list_loading.json'
import FadeInView from './FadeInView'
import Separator from './Separator'

type DataPipe = (list: any[], data: any[]) => any[]

export const defaultPipe = (list: any[], data: any[]) => uniqBy([...list, ...data], '_id')
export const invertedPipe = (list: any[], data: any[]) => uniqBy([...data, ...list], '_id')

const BOTTOM_SPACE = getBottomSpace()

interface Props {
  dataProvider: CursorDataProvider | OffsetDataProvider
  pollingDataProvider?: CursorDataProvider | OffsetDataProvider
  renderItem: ListRenderItem<any>
  ListHeaderComponent?: React.FunctionComponent
  ListEmptyComponent?: React.FunctionComponent
  ItemSeparatorComponent?: React.ComponentClass<any, any> | React.FunctionComponent<any>
  getItemLayout?: (data: any[] | null, index: number) => {
    index: number;
    length: number;
    offset: number;
  }
  contentContainerStyle?: ViewStyle
  style?: ViewStyle
  onContentSizeChange?: (w: number, h: number) => void
  allowRefresh?: boolean
  fadeIn?: boolean
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onLayout?: (event: LayoutChangeEvent) => void
  inverted?: boolean
  dataPipe?: DataPipe
  horizontal?: boolean
  onRefresh?: () => void
  enableBottomSpace?: boolean
  contentPaddingBottom?: number
}

export default memo(forwardRef((props: Props, ref: any) => {
  const {
    dataProvider,
    pollingDataProvider,
    renderItem,
    ListHeaderComponent,
    ListEmptyComponent,
    ItemSeparatorComponent,
    getItemLayout,
    contentContainerStyle,
    style,
    onContentSizeChange,
    allowRefresh = true,
    fadeIn,
    onScroll,
    onLayout,
    inverted,
    horizontal,
    dataPipe = defaultPipe,
    onRefresh,
    enableBottomSpace,
    contentPaddingBottom
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

  const loadingComponent = useCallback(() => isBusy ? (
    <View style={{ alignItems: 'center' }}>
      <LottieView
        style={{
          width: 150,
          height: 150
        }}
        autoPlay={true}
        source={listLoading as any}
      />
      {
        (enableBottomSpace && !inverted && BOTTOM_SPACE > 0) && (
          <Separator height={BOTTOM_SPACE} />
        )
      }
    </View>
  ) : <></>, [isBusy])

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
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={horizontal ? null : loadingComponent}
      ListEmptyComponent={isBusy ? null : ListEmptyComponent}
      onContentSizeChange={onContentSizeChange}
      onEndReached={() => next()}
      onEndReachedThreshold={0.1}
      onScroll={onScroll}
      onLayout={onLayout}
      data={list}
      keyExtractor={keyExtractor}
      renderItem={renderItemCallback}
      ItemSeparatorComponent={ItemSeparatorComponent}
      getItemLayout={getItemLayout}
      removeClippedSubviews={false}
      contentContainerStyle={[
        {
          ...((!isBusy && list.length === 0) && {
            flex: 1
          }),
          ...(contentPaddingBottom && {
            paddingBottom: contentPaddingBottom
          })
        },
        contentContainerStyle
      ]}
      style={style}
      inverted={inverted}
      horizontal={horizontal}
    />
  )
}))
