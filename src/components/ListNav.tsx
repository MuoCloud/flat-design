import React, { memo } from 'react'
import { GestureResponderEvent, Text, ViewStyle } from 'react-native'
import Icon from './Icon'
import View from './View'

interface Props {
  color?: string
  backgroundColor?: string
  title: string
  onPress?: (event: GestureResponderEvent) => void
  style?: ViewStyle
}

export default memo((props: Props) => {
  const {
    color = 'black',
    backgroundColor = '#ffffff',
    title,
    onPress,
    style = {}
  } = props

  return (
    <View
      onPress={onPress}
      color={backgroundColor}
      style={[
        {
          paddingHorizontal: 20,
          paddingVertical: 15,
          flexDirection: 'row',
          alignItems: 'center'
        },
        style
      ]}
    >
      <Text
        style={{
          fontSize: 16,
          color
        }}
      >
        {title}
      </Text>

      <View style={{ marginLeft: 'auto' }}>
        <Icon
          name="arrow-ios-forward-outline"
          color="black"
          size={20}
        />
      </View>
    </View>
  )
})
