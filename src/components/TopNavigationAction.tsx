import React, { memo } from 'react'
import { GestureResponderEvent, ViewStyle } from 'react-native'
import { TopNavigationAction } from 'react-native-ui-kitten'
import Icon from './Icon'

interface Props {
  color?: string
  icon?: string
  style?: ViewStyle
  onPress?: (event: GestureResponderEvent) => void
}

export default memo((props: Props) => {
  const {
    color = 'black',
    icon,
    style,
    onPress
  } = props

  return (
    <TopNavigationAction
      activeOpacity={0.8}
      icon={iconStyle => <Icon style={iconStyle} color={color} name={icon} />}
      style={style}
      onPress={onPress}
    />
  )
})
