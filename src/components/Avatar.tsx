import React, { memo } from 'react'
import { Avatar, AvatarProps } from 'react-native-ui-kitten'

interface Props extends AvatarProps {
  height?: number
  width?: number
}

export default memo((props: Props) => {
  const { style, height, width, ...restProps } = props

  return (
    <Avatar
      style={[
        {
          ...(height && { height }),
          ...(width && { width }),
          backgroundColor: '#eceff1'
        },
        style
      ]}
      {...restProps}
    />
  )
})
