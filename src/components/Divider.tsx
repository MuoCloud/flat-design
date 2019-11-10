import React, { memo } from 'react'
import { View, ViewProps } from 'react-native'

interface Props extends ViewProps {
  color?: string
  marginX?: number
  marginY?: number
}

export default memo((props: Props) => {
  const { color = '#eceff1', marginX = 0, marginY = 10 } = props

  return (
    <View
      style={{
        height: 1,
        backgroundColor: color,
        marginHorizontal: marginX,
        marginVertical: marginY
      }}
    />
  )
})
