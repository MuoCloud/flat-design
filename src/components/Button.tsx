import React, { memo, useCallback, useState } from 'react'
import {
  GestureResponderEvent,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewProps
} from 'react-native'
import { darken, getContentColorSystem, lighten } from '../utils'

interface Props extends ViewProps {
  children: string
  size?: 'large' | 'medium' | 'small'
  disabled?: boolean
  color?: string
  textColor?: string
  textSize?: number
  round?: boolean
  bold?: boolean
  onPress: (event: GestureResponderEvent) => void
}

export default memo((props: Props) => {
  const {
    children,
    size = 'large',
    color = '#ffffff',
    disabled,
    round = true,
    bold = true,
    textSize,
    onPress,
    style,
    ...restRrops
  } = props

  const height = {
    large: 46,
    medium: 40,
    small: 28
  }[size]

  const fontSize = {
    large: 16,
    medium: 14.5,
    small: 12
  }[size]

  const paddingHorizontal = {
    large: 15,
    medium: 12.5,
    small: 10
  }[size]

  const colorSystem = getContentColorSystem(color)

  const textColor = props.textColor
    || (colorSystem === 'light-content' ? '#ffffff' : '#000000')

  const [active, setActive] = useState(false)
  const onPressIn = useCallback(() => setActive(true), [])
  const onPressOut = useCallback(() => setActive(false), [])

  return (
    <TouchableWithoutFeedback
      onPress={event => {
        if (!disabled) {
          onPress(event)
        }
      }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            height,
            paddingHorizontal,
            ...(round && {
              borderRadius: 4
            }),
            ...(disabled ? {
              backgroundColor: colorSystem === 'dark-content'
                ? darken(color, 30)
                : lighten(color, 60)
            } : {
                backgroundColor: active
                  ? (
                    colorSystem === 'dark-content'
                      ? darken(color, 3)
                      : darken(color, 10)
                  )
                  : color
              })
          },
          style
        ]}
        {...restRrops}
      >
        <Text
          style={{
            color: textColor,
            fontSize: textSize || fontSize,
            fontWeight: bold ? 'bold' : 'normal'
          }}
        >
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
})
