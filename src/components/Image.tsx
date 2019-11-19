import React, { memo } from 'react'
import {
  GestureResponderEvent,
  Image,
  ImageProps,
  TouchableWithoutFeedback
} from 'react-native'
import { BoxProps } from '../types/common-props'
import { excludeBoxProps, extractBoxStyles } from '../utils'

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
      {...excludeBoxProps(restProps)}
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
