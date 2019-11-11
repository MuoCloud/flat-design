import React, { memo, useMemo } from 'react'
import {
  GestureResponderEvent,
  Image,
  ImageProps,
  TouchableWithoutFeedback
} from 'react-native'

interface Props extends ImageProps {
  onPress?: (event: GestureResponderEvent) => void
}

export default memo((props: Props) => {
  const { style, source, onPress, ...restProps } = props

  const imageComponent = useMemo(() => (
    <Image
      source={source}
      style={[
        {
          backgroundColor: '#eceff1'
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
