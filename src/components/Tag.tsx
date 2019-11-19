import React, { memo } from 'react'
import { GestureResponderEvent, TextStyle } from 'react-native'
import Text from './Text'
import View, { ViewProps } from './View'

interface Props extends ViewProps {
  children: string
  textStyle?: TextStyle
  color?: string
  textColor?: string
  bold?: boolean
  onPress?: (event: GestureResponderEvent) => void
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
    bold,
    ...restProps
  } = props

  return (
    <View
      color={color}
      onPress={onPress}
      align="center"
      verticalAlign="middle"
      radius={15}
      style={[
        {
          paddingHorizontal: 12,
          height: 26,
        },
        style
      ]}
      {...restProps}
    >
      <Text
        color={textColor}
        size={13}
        lineHeight={20}
        bold={bold}
        style={textStyle}
      >
        {children}
      </Text>
    </View>
  )
})
