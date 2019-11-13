import React, { forwardRef, memo, Ref } from 'react'
import { Platform, TextInput, TextInputProps } from 'react-native'

interface Props extends TextInputProps {
  useSingleLinePadding?: boolean
}

export default memo(forwardRef((props: Props, ref: Ref<TextInput>) => {
  const {
    style,
    useSingleLinePadding,
    placeholderTextColor = '#a6b0c3',
    multiline,
    ...restRrops
  } = props

  return (
    <TextInput
      ref={ref}
      style={[
        {
          paddingHorizontal: 12.5,
          ...Platform.select({
            android: {
              ...((multiline && !useSingleLinePadding) ? {
                paddingTop: 10,
                paddingBottom: 10
              } : {
                paddingTop: 7.5,
                paddingBottom: 7.5
              })
            },
            ios: {
              paddingTop: 12.5,
              paddingBottom: 12.5
            }
          })
        },
        style
      ]}
      multiline={multiline}
      {...restRrops}
    />
  )
}))
