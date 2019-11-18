import React, { memo } from 'react'
import { View, ViewProps } from 'react-native'
import { extractBoxStyles } from '../utils'

interface Props extends BoxProps, ViewProps {
  color?: string
  height?: number
}

export default memo((props: Props) => {
  const {
    color = 'transparent',
    height = 10,
    style,
    ...restProps
  } = props

  return (
    <View
      style={[
        {
          height,
          backgroundColor: color
        },
        extractBoxStyles(props),
        style
      ]}
      {...restProps}
    />
  )
})
