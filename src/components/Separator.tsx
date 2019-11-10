import React, { memo } from 'react'
import { View } from 'react-native'

interface Props {
  color?: string
  height?: number
}

export default memo((props: Props) => {
  const { color = 'transparent', height = 10 } = props

  return (
    <View
      style={{
        height,
        backgroundColor: color
      }}
    />
  )
})
