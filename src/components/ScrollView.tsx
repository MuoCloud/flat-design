import React, { memo } from 'react'
import { ScrollViewProps } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { getBottomSpace } from 'react-native-iphone-x-helper'

interface Props extends ScrollViewProps {
  flex?: number
  color?: string
  contentPadding?: number
  enableBottomSpace?: boolean
  children?: React.ReactNode
}

export default memo((props: Props) => {
  const {
    flex,
    color,
    contentPadding,
    enableBottomSpace,
    style,
    contentContainerStyle,
    ...restProps
  } = props

  return (
    <ScrollView
      style={[
        {
          ...(typeof flex === 'number' && { flex }),
          ...(color && { backgroundColor: color })
        },
        style
      ]}
      contentContainerStyle={[
        {
          ...(contentPadding && { padding: contentPadding }),
          ...(enableBottomSpace && {
            paddingBottom: (contentPadding || 0) + getBottomSpace()
          })
        },
        contentContainerStyle
      ]}
      {...restProps}
    />
  )
})
