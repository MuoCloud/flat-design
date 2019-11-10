import React, { memo } from 'react'
import { View } from 'react-native'

interface Props {
  color?: string
}

export default memo((props: Props) => {
  const { color = 'rgba(0, 0, 0, .05)' } = props

  return (
    <View
      style={{
        backgroundColor: color,
        height: 1,
        marginHorizontal: 10,
        marginVertical: 2.5
      }}
    />
  )
})
