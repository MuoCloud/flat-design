import React, { memo, useMemo } from 'react'
import { GestureResponderEvent, ImageProps, TouchableWithoutFeedback } from 'react-native'
import Image from './Image'

interface Props extends ImageProps {
  size?: number
  onPress?: (event: GestureResponderEvent) => void
}

export default memo((props: Props) => {
  const { style, onPress, size = 40, source, ...restProps } = props
  const imageComponent = useMemo(() => (
    <Image
      height={size}
      width={size}
      source={source}
      style={[
        {
          borderRadius: size / 2
        },
        style
      ]}
      {...restProps}
    />
  ), [source])

  if (onPress) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        {imageComponent}
      </TouchableWithoutFeedback>
    )
  } else {
    return imageComponent
  }
})
