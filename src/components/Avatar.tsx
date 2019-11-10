import React, { memo } from 'react'
import { ImageProps } from 'react-native'
import Image from './Image'

interface Props extends ImageProps {
  size?: number
}

export default memo((props: Props) => {
  const { style, size = 40, ...restProps } = props

  return (
    <Image
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
