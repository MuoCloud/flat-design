import React, { memo } from 'react'
import { KeyboardAvoidingView, Platform, ViewProps } from 'react-native'

interface Props extends ViewProps {
  flex?: number
  children: React.ReactNode
}

export default memo((props: Props) => {
  const { style, flex, children } = props

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[
        {
          ...(typeof flex === 'number' && { flex })
        },
        style
      ]}
    >
      {children}
    </KeyboardAvoidingView>
  )
})
