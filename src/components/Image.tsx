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
  const { style, onPress, ...restProps } = props

  const imageComponent = useMemo(() => (
    <Image
      style={[
        {
          backgroundColor: '#eceff1'
        },
        style
      ]}
      {...restProps}
    />
  ), [props])

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
