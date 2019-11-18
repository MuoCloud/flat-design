import React, { memo } from 'react'
import {
  GestureResponderEvent,
  Image,
  ImageProps,
  TouchableWithoutFeedback
} from 'react-native'
import { extractBoxStyles } from '../utils'

interface Props extends BoxProps, ImageProps {
  onPress?: (event: GestureResponderEvent) => void
}

export default memo((props: Props) => {
  const { style, onPress, ...restProps } = props

  const imageComponent = (
    <Image
      style={[
        {
          backgroundColor: '#eceff1',
        },
        extractBoxStyles(props),
        style
      ]}
      {...restProps}
    />
  )

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
