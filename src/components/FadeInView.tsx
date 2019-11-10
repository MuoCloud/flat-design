import React, { memo, useEffect, useState } from 'react'
import { Animated, ViewProps } from 'react-native'

interface Props extends ViewProps {
  duration?: number
  children?: React.ReactNode
}

export default memo((props: Props) => {
  const { duration = 200, style, children, ...restProps } = props
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
      style={[style, { opacity }]}
      {...restProps}
    >
      {children}
    </Animated.View>
  )
})
