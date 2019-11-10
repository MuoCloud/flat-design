import React, { memo } from 'react'
import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

interface Props extends Partial<TouchableOpacityProps> {
  children: string
  textStyle?: TextStyle
  color?: string
  textColor?: string
  bold?: boolean
}

export { Props as TagProps }

export default memo((props: Props) => {
  const {
    children,
    style,
    textStyle,
    onPress,
    color = '#555',
    textColor = 'white',
    bold
  } = props

  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.8 : 1}
      onPress={onPress}
      style={[
        {
          backgroundColor: color,
          paddingHorizontal: 12,
          height: 26,
          justifyContent: 'center',
          borderRadius: 15
        },
        style
      ]}
    >
      <Text
        style={[
          {
            color: textColor,
            fontSize: 13,
            lineHeight: 20,
            ...(bold && {
              fontWeight: 'bold'
            })
          },
          textStyle
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
})
