import React, { memo } from 'react'
import { ScrollViewProps } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { extractBoxMarginStyles, extractBoxPaddingStyles } from '../utils'
import Separator from './Separator'

const BOTTOM_SPACE = getBottomSpace()

interface Props extends BoxProps, ScrollViewProps {
  flex?: number
  color?: string
  enableBottomSpace?: boolean
  children?: React.ReactNode
}

export default memo((props: Props) => {
  const {
    flex,
    color,
    enableBottomSpace,
    style,
    contentContainerStyle,
    children,
    ...restProps
  } = props

  return (
    <ScrollView
      style={[
        {
          ...(typeof flex === 'number' && { flex }),
          ...(color && { backgroundColor: color })
        },
        extractBoxMarginStyles(props),
        style
      ]}
      contentContainerStyle={[
        extractBoxPaddingStyles(props),
        contentContainerStyle
      ]}
      {...restProps}
    >
      {children}

      {
        (enableBottomSpace && BOTTOM_SPACE > 0) && (
          <Separator height={BOTTOM_SPACE} />
        )
      }
    </ScrollView>
  )
})
