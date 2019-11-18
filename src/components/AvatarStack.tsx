import { map, reverse } from 'lodash'
import React, { memo, useMemo } from 'react'
import { ImageSourcePropType, ViewProps } from 'react-native'
import { BoxProps } from '../types/common-props'
import { extractBoxStyles } from '../utils'
import Avatar from './Avatar'
import View from './View'

interface Props extends BoxProps, ViewProps {
  sources: ImageSourcePropType[]
  size?: number
}

export default memo((props: Props) => {
  const {
    sources,
    size = 40,
    style,
    ...restProps
  } = props

  const reversedSources = useMemo(() => reverse(sources).slice(0, 3), [sources])

  return (
    <View
      style={[
        {
          flexDirection: 'row-reverse',
          alignItems: 'center',
          alignSelf: 'flex-start'
        },
        extractBoxStyles(props),
        style
      ]}
      {...restProps}
    >
      {
        map(reversedSources, (source, index) => (
          <Avatar
            key={index}
            height={size}
            width={size}
            source={source}
            style={{
              marginRight: -(size * 0.7),
              borderColor: '#ffffff',
              borderWidth: 2
            }}
          />
        ))
      }
    </View>
  )
})
