import React from 'react'
import {
  Animated,
  BackHandler,
  Easing,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle
} from 'react-native'

interface Props {
  /**
   * Determines whether clicking outside the modal dismiss it.
   */
  dismissable?: boolean
  /**
   * Callback that is called when the user dismisses the modal.
   */
  onDismiss?: () => void
  /**
   * Determines Whether the modal is visible.
   */
  visible: boolean
  /**
   * Content of the `Modal`.
   */
  children: React.ReactNode
  /**
   * Style for the content of the modal
   */
  contentContainerStyle?: StyleProp<ViewStyle>

  duration?: number
  backdropColor?: string
}

interface State {
  opacity: Animated.Value
  rendered: boolean
}

class Modal extends React.PureComponent<Props, State> {
  static defaultProps = {
    dismissable: true,
    visible: false,
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.visible && !prevState.rendered) {
      return {
        rendered: true,
      }
    }

    return null
  }

  state = {
    opacity: new Animated.Value(this.props.visible ? 1 : 0),
    rendered: this.props.visible,
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.visible !== this.props.visible) {
      if (this.props.visible) {
        this.showModal()
      } else {
        this.hideModal()
      }
    }
  }

  handleBack = () => {
    if (this.props.dismissable) {
      this.hideModal()
    }
    return true
  }

  showModal = () => {
    const { duration = 280 } = this.props

    BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
    BackHandler.addEventListener('hardwareBackPress', this.handleBack)

    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start()
  }

  hideModal = () => {
    const { duration = 280 } = this.props

    BackHandler.removeEventListener('hardwareBackPress', this.handleBack)

    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (!finished) {
        return
      }

      if (this.props.visible && this.props.onDismiss) {
        this.props.onDismiss()
      }

      if (this.props.visible) {
        this.showModal()
      } else {
        this.setState({ rendered: false })
      }
    })
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
  }

  render() {
    if (!this.state.rendered) {
      return null
    }

    const {
      children,
      dismissable,
      contentContainerStyle,
      backdropColor = 'rgba(0, 0, 0, .25)'
    } = this.props

    return (
      <Animated.View
        pointerEvents={this.props.visible ? 'auto' : 'none'}
        accessibilityViewIsModal={true}
        accessibilityLiveRegion="polite"
        style={StyleSheet.absoluteFill}
      >
        <TouchableWithoutFeedback
          onPress={dismissable ? this.hideModal : undefined}
        >
          <Animated.View
            style={[
              styles.backdrop,
              { backgroundColor: backdropColor, opacity: this.state.opacity },
            ]}
          />
        </TouchableWithoutFeedback>
        <SafeAreaView style={styles.wrapper}>
          <Animated.View
            style={
              [
                { opacity: this.state.opacity },
                styles.content,
                contentContainerStyle,
              ] as StyleProp<ViewStyle>
            }
          >
            {children}
          </Animated.View>
        </SafeAreaView>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
})

export default Modal
