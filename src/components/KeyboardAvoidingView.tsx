import React, { memo } from 'react'
import { KeyboardAvoidingView, Platform, ViewProps } from 'react-native'
import { BoxProps } from '../types/common-props'
import { extractBoxStyles } from '../utils'

interface Props extends BoxProps, ViewProps {
  color?: string
  children: React.ReactNode
}

export default memo((props: Props) => {
  const { color = '#ffffff', style, ...restProps } = props

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[
        {
          backgroundColor: color
        },
        extractBoxStyles(props),
        style
      ]}
      {...restProps}
    />
  )
})
