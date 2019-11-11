import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { memo } from 'react'
import { GestureResponderEvent, TouchableOpacity, ViewStyle } from 'react-native'
import { Icon } from 'react-native-eva-icons'

interface Props {
  size?: number
  color?: string
  name?: string
  pack?: 'eva' | 'ion' | 'md'
  style?: ViewStyle
  onPress?: (event: GestureResponderEvent) => void
}

export default memo((props: Props) => {
  const { size = 20, color = 'black', name, pack = 'eva', onPress, style } = props

  const iconComponent = (() => {
    if (pack === 'eva') {
      return <Icon style={style} name={name} height={size} width={size} fill={color} />
    } else if (pack === 'ion') {
      return <Ionicons style={style} name={name} size={size} color={color} />
    } else if (pack === 'md') {
      return <MaterialCommunityIcons style={style} name={name} size={size} color={color} />
    }
  })()

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
      >
        {iconComponent}
      </TouchableOpacity>
    )
  } else {
    return iconComponent
  }
})
