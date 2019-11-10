import React, { memo } from 'react'
import { Text, TextProps } from 'react-native'

interface Props extends TextProps {
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
    size = 14,
    lineHeight,
    bold,
    color = defaultColor,
    style,
    ...restProps
  } = props

  return (
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
})
