import LottieView from 'lottie-react-native'
import React, { useCallback, useState } from 'react'
import { GestureResponderEvent } from 'react-native'
import AutoHeightImage, { AutoHeightImageProps } from 'react-native-auto-height-image'
import imageLoading from '../assets/lottie/image_loading.json'
import View from './View'

interface Props extends AutoHeightImageProps {
  onPress: (event: GestureResponderEvent) => void
}

export default (props: Props) => {
  const { onPress, onHeightChange, ...restProps } = props
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
      style={{ backgroundColor: '#eceff1' }}
    >
      {
        !loaded && (
          <View style={{ alignItems: 'center' }}>
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
