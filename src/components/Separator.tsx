import React, { memo } from 'react'
import View, { ViewProps } from './View'

interface Props extends ViewProps {
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
        style
      ]}
      {...restProps}
    />
  )
})
