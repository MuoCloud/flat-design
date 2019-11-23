import React, { memo } from 'react'
import {
  GestureResponderEvent,
  Image,
  ImageProps,
  TouchableWithoutFeedback
} from 'react-native'
import { BoxProps } from '../types/common-props'
import { excludeBoxProps, extractBoxStyles } from '../utils'

interface Props extends BoxProps, Omit<ImageProps, 'width' | 'height'> {
  backgroundColor?: string
  width?: number | string
  height?: number | string
  onPress?: (event: GestureResponderEvent) => void
}

export default memo((props: Props) => {
  const {
    backgroundColor = '#eceff1',
    width,
    height,
    style,
    onPress,
    ...restProps
  } = props

  const imageComponent = (
    <Image
      style={[
        {
          backgroundColor,
          width,
          height
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
