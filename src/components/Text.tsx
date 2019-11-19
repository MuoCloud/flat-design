import React, { memo } from 'react'
import { GestureResponderEvent, Text, TextProps, TouchableOpacity } from 'react-native'
import { BoxProps } from '../types/common-props'
import { excludeBoxProps, extractBoxStyles } from '../utils'

interface Props extends BoxProps, TextProps {
  onPress?: (event: GestureResponderEvent) => void
  size?: number
  lineHeight?: number
  bold?: boolean
  color?: string
  children?: string | string[]
}

type BoldWeight = 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

let defaultColor = 'black'
let boldWeight: BoldWeight = '600'

export const setDefaultTextColor = (color: string) => {
  defaultColor = color
}

export const setBoldWeight = (weight: BoldWeight) => {
  boldWeight = weight
}

export default memo((props: Props) => {
  const {
    onPress,
    size = 14,
    lineHeight,
    bold,
    color = defaultColor,
    style,
    ...restProps
  } = props

  const textComponent = (
    <Text
      style={[
        {
          color,
          fontSize: size,
          ...(lineHeight && { lineHeight }),
          ...(bold && { fontWeight: boldWeight }),
          ...(onPress && extractBoxStyles(props))
        },
        style
      ]}
      {...excludeBoxProps(restProps)}
    />
  )

  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={extractBoxStyles(props)}
      >
        {textComponent}
      </TouchableOpacity>
    )
  } else {
    return textComponent
  }
})
