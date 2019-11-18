import LottieView from 'lottie-react-native'
import React, { useCallback, useState } from 'react'
import { GestureResponderEvent } from 'react-native'
import AutoHeightImage, { AutoHeightImageProps } from 'react-native-auto-height-image'
import imageLoading from '../assets/lottie/image_loading.json'
import { BoxProps } from '../types/common-props'
import { extractBoxStyles } from '../utils'
import View from './View'

interface Props extends BoxProps, AutoHeightImageProps {
  onPress?: (event: GestureResponderEvent) => void
}

export default (props: Props) => {
  const { onPress, onHeightChange, style, ...restProps } = props
  const [loaded, setLoaded] = useState(false)

  const onHeightChangeHandler = useCallback((height: number) => {
    if (!loaded && height > 0) {
      setLoaded(true)
    }

    if (onHeightChange) {
      onHeightChange(height)
    }
  }, [loaded])

  return (
    <View
      onPress={onPress}
      style={[
        { backgroundColor: '#eceff1' },
        extractBoxStyles(props),
        style
      ]}
    >
      {
        !loaded && (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LottieView
              style={{
                width: 150,
                height: 150
              }}
              autoPlay={true}
              source={imageLoading as any}
            />
          </View>
        )
      }

      <AutoHeightImage
        onHeightChange={onHeightChangeHandler}
        {...restProps}
      />
    </View>
  )
}
