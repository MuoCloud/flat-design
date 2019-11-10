import React, { memo } from 'react'
import { Image, ImageProps } from 'react-native'

export default memo((props: ImageProps) => {
  const { style, ...restProps } = props

  return (
    <Image
      style={[
        {
          backgroundColor: '#eceff1'
        },
        style
      ]}
      {...restProps}
    />
  )
})
