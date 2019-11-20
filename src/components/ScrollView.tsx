import React, { memo } from 'react'
import { ScrollViewProps } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { BoxProps } from '../types/common-props'
import {
  excludeBoxProps,
  extractBoxMarginStyles,
  extractBoxPaddingStyles,
  extractFlexStyles
} from '../utils'
import Separator from './Separator'

const BOTTOM_SPACE = getBottomSpace()

interface Props extends BoxProps, ScrollViewProps {
  color?: string
  enableBottomSpace?: boolean
  children?: React.ReactNode
}

export default memo((props: Props) => {
  const {
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
          ...(color && { backgroundColor: color })
        },
        extractBoxMarginStyles(props),
        extractFlexStyles(props),
        style
      ]}
      contentContainerStyle={[
        extractBoxPaddingStyles(props),
        contentContainerStyle
      ]}
      {...excludeBoxProps(restProps)}
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
