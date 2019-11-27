import React, { memo } from 'react'
import { KeyboardAvoidingView, KeyboardAvoidingViewProps } from 'react-native'
import { BoxProps } from '../types/common-props'
import { extractBoxStyles } from '../utils'

interface Props extends BoxProps, KeyboardAvoidingViewProps {
  color?: string
  children: React.ReactNode
}

export default memo((props: Props) => {
  const {
    color = '#ffffff',
    behavior = 'padding',
    style,
    ...restProps
  } = props

  return (
    <KeyboardAvoidingView
      behavior={behavior}
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
