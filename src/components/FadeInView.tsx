import React, { memo, useEffect, useState } from 'react'
import { Animated, ViewProps } from 'react-native'
import { BoxProps } from '../types/common-props'
import { excludeBoxProps, extractBoxStyles } from '../utils'

interface Props extends BoxProps, ViewProps {
  duration?: number
  children?: React.ReactNode
}

export default memo((props: Props) => {
  const { flex, duration = 200, style, children, ...restProps } = props
  const [opacity] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration,
        useNativeDriver: true
      }
    ).start()
  }, [])

  return (
    <Animated.View
      style={[
        extractBoxStyles(props),
        style,
        { opacity }
      ]}
      {...excludeBoxProps(restProps)}
    >
      {children}
    </Animated.View>
  )
})
