import React, { memo } from 'react'
import { GestureResponderEvent, ViewProps } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import Icon, { IconPack } from './Icon'
import View from './View'

interface Props extends ViewProps {
  color?: string
  activeColor?: string
  textColor?: string
  enableBottomSpace?: boolean
  icon?: string
  iconPack?: IconPack
  onPress?: (event: GestureResponderEvent) => void
}

export default memo((props: Props) => {
  const {
    color = '#ffffff',
    activeColor,
    textColor = '#777777',
    enableBottomSpace,
    icon,
    iconPack = 'eva',
    onPress,
    ...restProps
  } = props

  return (
    <View
      onPress={onPress}
      color={color}
      activeColor={activeColor}
      radius={30}
      align="center"
      verticalAlign="middle"
      style={{
        position: 'absolute',
        bottom: 20 + (enableBottomSpace ? getBottomSpace() : 0),
        right: 20,
        height: 60,
        width: 60,
      }}
      {...restProps}
    >
      <Icon name={icon} pack={iconPack} size={24} color={textColor} />
    </View>
  )
})
