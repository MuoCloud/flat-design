import React, { memo, useCallback } from 'react'
import { StatusBar, TextStyle, ViewStyle } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { getContentColorSystem } from '../utils'
import NavbarAction from './NavbarAction'
import Text from './Text'
import View from './View'

interface ControlProps {
  color?: string
  height?: number
  size?: number
}

type Controls = React.ReactNode | React.ReactNode[] | ((props: ControlProps) => React.ReactNode[])

interface Props {
  color?: string
  borderColor?: string
  border?: boolean
  textColor?: string
  textSize?: number
  barStyle?: 'light-content' | 'dark-content'
  height?: number
  style?: ViewStyle
  title?: string
  titleStyle?: TextStyle
  leftControls?: Controls
  rightControls?: Controls
  back?: boolean
  onBack?: () => void
}

export default memo((props: Props) => {
  const {
    color = '#ffffff',
    borderColor = '#edeff2',
    border = true,
    height = 43,
    style,
    title = '',
    titleStyle,
    textSize = 16,
    leftControls,
    rightControls,
    back,
    onBack
  } = props

  const contentColorSystem = color !== 'transparent'
    ? getContentColorSystem(color)
    : 'light-content'

  const barStyle = props.barStyle || contentColorSystem
  const textColor = props.textColor ||
    (contentColorSystem === 'dark-content' ? '#000000' : '#ffffff')

  const controlProps: ControlProps = {
    color: textColor,
    height,
    size: textSize
  }

  const makeControls = useCallback((controls: Controls) => {
    const statelessControls = typeof controls === 'function'
      ? controls(controlProps)
      : controls

    return statelessControls
  }, [props])

  return (
    <View
      color={color}
      verticalAlign="bottom"
      style={[
        {
          paddingTop: getStatusBarHeight(true),
          ...(border && {
            borderBottomWidth: 1,
            borderBottomColor: borderColor
          })
        },
        style
      ]}
    >
      <StatusBar barStyle={barStyle} />

      <View
        row={true}
        verticalAlign="middle"
        style={{
          height,
          paddingHorizontal: 8
        }}
      >
        <View row={true} verticalAlign="middle">
          {back && (
            <NavbarAction
              {...controlProps}
              icon="arrow-ios-back-outline"
              onPress={onBack}
            />
          )}

          {leftControls && makeControls(leftControls)}
        </View>

        <Text
          color={textColor}
          size={textSize}
          lineHeight={height}
          bold={true}
          style={[
            {
              marginLeft: 8
            },
            titleStyle
          ]}
          children={title}
        />

        <View
          row={true}
          verticalAlign="middle"
          style={{ marginLeft: 'auto' }}
        >
          {rightControls && makeControls(rightControls)}
        </View>
      </View>
    </View>
  )
})
