import React, { memo } from 'react'
import { GestureResponderEvent } from 'react-native'
import Icon from './Icon'
import View from './View'

interface Props {
  icon?: string
  color?: string
  activeColor?: string
  size?: number
  height?: number
  onPress?: (event: GestureResponderEvent) => void
}

export default memo((props: Props) => {
  const {
    icon,
    color = '#000000',
    activeColor = 'rgba(0, 0, 0, .03)',
    size = 16,
    height = 40,
    onPress
  } = props

  return (
    <View
      align="center"
      verticalAlign="middle"
      style={{
        height,
        width: height
      }}
    >
      <View
        onPress={onPress}
        activeColor={activeColor}
        align="center"
        verticalAlign="middle"
        style={{
          height: height - 7,
          width: height - 7,
          borderRadius: (height - 7) / 2
        }}
      >
        <Icon
          name={icon}
          size={size + 4}
          color={color}
        />
      </View>
    </View>
  )
})
