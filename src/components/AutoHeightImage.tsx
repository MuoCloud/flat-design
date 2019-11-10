import LottieView from 'lottie-react-native'
import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import AutoHeightImage, { AutoHeightImageProps } from 'react-native-auto-height-image'

export default (props: AutoHeightImageProps) => {
  const { onHeightChange, ...restProps } = props
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
    <View style={{ backgroundColor: '#eceff1' }}>
      {
        !loaded && (
          <View style={{ alignItems: 'center' }}>
            <LottieView
              style={{
                width: 150,
                height: 150
              }}
              autoPlay={true}
              source={require('../assets/lottie/image_loading.json')}
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
