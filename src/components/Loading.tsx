import LottieView from 'lottie-react-native'
import React, { memo } from 'react'
import { View } from 'react-native'
import Modal from './Modal'
import Portal from './Portal'

interface Props {
  isLoading: boolean
}

export default memo((props: Props) => {
  const { isLoading } = props

  return (
    <Portal>
      <Modal visible={isLoading} dismissable={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, .15)',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <LottieView
            style={{
              width: 120,
              height: 120
            }}
            autoPlay={true}
            source={require('../assets/lottie/loading.json')}
          />
        </View>
      </Modal>
    </Portal>
  )
})
