import React, { memo } from 'react'
import { GestureResponderEvent, Text, TextProps, TouchableOpacity } from 'react-native'

interface Props extends TextProps {
  onPress?: (event: GestureResponderEvent) => void
  size?: number
  lineHeight?: number
  bold?: boolean
  color?: string
  children?: string | string[]
}

let defaultColor = 'black'

export const setDefaultTextColor = (color: string) => {
  defaultColor = color
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
          ...(bold && { fontWeight: 'bold' })
        },
        style
      ]}
      {...restProps}
    />
  )

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        {textComponent}
      </TouchableOpacity>
    )
  } else {
    return textComponent
  }
})
