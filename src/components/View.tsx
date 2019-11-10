import React, { memo } from 'react'
import { View, ViewProps } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import FadeInView from './FadeInView'

interface Props extends ViewProps {
  flex?: number
  color?: string
  row?: boolean
  column?: boolean
  verticalAlign?: 'top' | 'middle' | 'bottom'
  align?: 'left' | 'center' | 'right'
  radius?: number
  padding?: number
  margin?: number
  fadeIn?: boolean
  enableBottomSpace?: boolean
  children?: React.ReactNode
}

export default memo((props: Props) => {
  const {
    flex,
    color = 'transparent',
    row,
    column,
    align,
    verticalAlign,
    radius = 0,
    padding = 0,
    margin = 0,
    fadeIn,
    enableBottomSpace,
    style,
    ...restProps
  } = props

  const verticalAlignValue = {
    top: 'flex-start',
    middle: 'center',
    bottom: 'flex-end'
  }[verticalAlign] as 'flex-start' | 'center' | 'flex-end'

  const alignValue = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  }[align] as 'flex-start' | 'center' | 'flex-end'

  const Component = fadeIn ? FadeInView : View

  return (
    <Component
      style={[
        {
          backgroundColor: color,
          ...(flex && { flex }),
          ...(row && {
            flexDirection: 'row',
            ...(verticalAlign && {
              alignItems: verticalAlignValue
            }),
            ...(align && {
              justifyContent: alignValue
            })
          }),
          ...((column || (!column && !row)) && {
            flexDirection: 'column',
            ...(align && {
              alignItems: alignValue
            }),
            ...(verticalAlign && {
              justifyContent: verticalAlignValue
            })
          }),
          padding,
          ...(enableBottomSpace && {
            paddingBottom: (padding || 0) + getBottomSpace()
          }),
          margin,
          borderRadius: radius
        },
        style
      ]}
      {...restProps}
    />
  )
})
