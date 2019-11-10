import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { memo } from 'react'
import { ViewStyle } from 'react-native'
import { Icon } from 'react-native-eva-icons'

interface Props {
  size?: number
  color?: string
  name?: string
  pack?: 'eva' | 'ion' | 'md'
  style?: ViewStyle
}

export default memo((props: Props) => {
  const { size = 20, color = 'black', name, pack = 'eva', style } = props

  if (pack === 'eva') {
    return <Icon style={style} name={name} height={size} width={size} fill={color} />
  } else if (pack === 'ion') {
    return <Ionicons style={style} name={name} size={size} color={color} />
  } else if (pack === 'md') {
    return <MaterialCommunityIcons style={style} name={name} size={size} color={color} />
  }
})
