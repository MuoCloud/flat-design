import React, { forwardRef, memo, Ref } from 'react'
import { Platform, TextInput, TextInputProps } from 'react-native'
import { BoxProps } from '../types/common-props'
import { excludeBoxProps, extractBoxStyles } from '../utils'

interface Props extends BoxProps, TextInputProps {
  useSingleLinePadding?: boolean
  border?: boolean
  borderColor?: string
}

export default memo(forwardRef((props: Props, ref: Ref<TextInput>) => {
  const {
    style,
    useSingleLinePadding,
    border,
    borderColor = '#eceff1',
    placeholderTextColor = '#a6b0c3',
    multiline,
    ...restRrops
  } = props

  return (
    <TextInput
      ref={ref}
      style={[
        {
          ...(border && {
            borderWidth: 1,
            borderColor,
            borderRadius: 4
          }),
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
          }),
        },
        extractBoxStyles(props),
        style
      ]}
      multiline={multiline}
      {...excludeBoxProps(restRrops)}
    />
  )
}))
