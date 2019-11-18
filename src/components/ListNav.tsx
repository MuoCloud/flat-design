import React, { memo } from 'react'
import { GestureResponderEvent, Text, ViewProps } from 'react-native'
import { BoxProps } from '../types/common-props'
import { extractBoxStyles } from '../utils'
import Icon from './Icon'
import View from './View'

interface Props extends BoxProps, ViewProps {
  color?: string
  backgroundColor?: string
  title: string
  onPress?: (event: GestureResponderEvent) => void
}

export default memo((props: Props) => {
  const {
    color = 'black',
    backgroundColor = '#ffffff',
    title,
    onPress,
    style,
    ...restProps
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
        extractBoxStyles(props),
        style
      ]}
      {...restProps}
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
