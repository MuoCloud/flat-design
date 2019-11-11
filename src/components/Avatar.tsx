import React, { memo } from 'react'
import { GestureResponderEvent, ImageProps } from 'react-native'
import Image from './Image'

interface Props extends ImageProps {
  size?: number
  onPress?: (event: GestureResponderEvent) => void
}

export default memo((props: Props) => {
  const { style, onPress, size = 40, ...restProps } = props

  return (
    <Image
      onPress={onPress}
      height={size}
      width={size}
      style={[
        {
          borderRadius: size / 2
        },
        style
      ]}
      {...restProps}
    />
  )
})
