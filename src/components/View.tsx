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
import { darken } from '../utils'
import Separator from './Separator'

const BOTTOM_SPACE = getBottomSpace()

interface Props extends ViewProps {
  flex?: number
  color?: string
  activeColor?: string
  row?: boolean
  column?: boolean
  wrap?: boolean
  verticalAlign?: 'top' | 'middle' | 'bottom'
  align?: 'left' | 'center' | 'right'
  radius?: number
  padding?: number
  margin?: number
  enableBottomSpace?: boolean
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
    padding = 0,
    margin = 0,
    enableBottomSpace,
    onPress,
    style,
    children,
    ...restProps
  } = props

  const activeColor = props.activeColor ||
    (color === 'transparent' ? 'transparent' : darken(color, 5))

  const verticalAlignValue = {
    top: 'flex-start',
    middle: 'center',
    bottom: 'flex-end'
  }[verticalAlign] as 'flex-start' | 'center' | 'flex-end'

  const alignValue = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  }[align] as 'flex-start' | 'center' | 'flex-end'

  // Touchable effect
  const [active, setActive] = useState(false)
  const onPressIn = useCallback(() => setActive(true), [])
  const onPressOut = useCallback(() => setActive(false), [])

  const finalStyle: StyleProp<ViewStyle> = [
    {
      backgroundColor: (onPress && active) ? activeColor : color,
      ...(flex && { flex }),
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
      padding,
      margin,
      borderRadius: radius
    },
    style
  ]

  const viewComponent = (
    <View
      style={finalStyle}
      {...restProps}
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
      >
        {viewComponent}
      </TouchableWithoutFeedback>
    )
  } else {
    return viewComponent
  }
})
