import React, { memo, useCallback, useState } from 'react'
import {
  GestureResponderEvent,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewProps,
  ViewStyle
} from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { BoxProps } from '../types/common-props'
import { darken, excludeBoxProps, extractBoxStyles } from '../utils'
import Separator from './Separator'

const BOTTOM_SPACE = getBottomSpace()

type FlexAlign = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'

interface Props extends BoxProps, ViewProps {
  flex?: number
  color?: string
  activeColor?: string
  row?: boolean
  column?: boolean
  wrap?: boolean
  verticalAlign?: 'top' | 'middle' | 'bottom'
  align?: 'left' | 'center' | 'right'
  radius?: number
  enableBottomSpace?: boolean
  touchableStyle?: ViewStyle
  onPress?: (event: GestureResponderEvent) => void
  children?: React.ReactNode
}

export default memo((props: Props) => {
  const {
    flex,
    wrap,
    color = 'transparent',
    row,
    column,
    align,
    verticalAlign,
    radius = 0,
    enableBottomSpace,
    onPress,
    style,
    touchableStyle,
    children,
    ...restProps
  } = props

  const activeColor = props.activeColor ||
    (color === 'transparent' ? 'transparent' : darken(color, 5))

  const verticalAlignValue = {
    'top': 'flex-start',
    'middle': 'center',
    'bottom': 'flex-end',
    'space-evenly': 'space-evenly',
    'space-around': 'space-around',
    'space-between': 'space-between'
  }[verticalAlign] as FlexAlign

  const alignValue = {
    'left': 'flex-start',
    'center': 'center',
    'right': 'flex-end',
    'space-evenly': 'space-evenly',
    'space-around': 'space-around',
    'space-between': 'space-between'
  }[align] as FlexAlign

  // Touchable effect
  const [active, setActive] = useState(false)
  const onPressIn = useCallback(() => setActive(true), [])
  const onPressOut = useCallback(() => setActive(false), [])

  const finalStyle: StyleProp<ViewStyle> = [
    {
      backgroundColor: (onPress && active) ? activeColor : color,
      ...(typeof flex === 'number' && { flex }),
      ...(wrap && { flexWrap: 'wrap' }),
      ...(row && {
        flexDirection: 'row',
        ...(verticalAlign && {
          alignItems: verticalAlignValue
        }),
        ...(align && {
          justifyContent: alignValue
        })
      }),
      ...((column || (!column && !row)) && {
        flexDirection: 'column',
        ...(align && {
          alignItems: alignValue
        }),
        ...(verticalAlign && {
          justifyContent: verticalAlignValue
        })
      }),
      borderRadius: radius,
    },
    extractBoxStyles(props),
    style
  ]

  const viewComponent = (
    <View
      style={finalStyle}
      {...excludeBoxProps(restProps)}
    >
      {children}

      {
        (enableBottomSpace && BOTTOM_SPACE > 0) && (
          <Separator height={BOTTOM_SPACE} />
        )
      }
    </View>
  )

  if (onPress) {
    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={touchableStyle}
      >
        {viewComponent}
      </TouchableWithoutFeedback>
    )
  } else {
    return viewComponent
  }
})

export { Props as ViewProps }
