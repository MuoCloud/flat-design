import React from 'react'
import {
  Animated,
  Dimensions,
  EmitterSubscription,
  Keyboard,
  KeyboardAvoidingView,
  PanResponder,
  PanResponderGestureState,
  PanResponderInstance,
  Platform,
  StyleSheet,
  View
} from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

const WINDOW_HEIGHT = Dimensions.get('window').height
const useNativeDriver = true

const styles = StyleSheet.create({
  roundedEdges: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, .2)',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 20
  },
})

interface Position {
  x: number
  y: number
}

interface Props {
  startUp?: boolean
  roundedEdges?: boolean
  shadow?: boolean
  backgroundColor?: string
  renderHeader?: () => JSX.Element
  renderBottomBar?: () => JSX.Element
  topOffset: number
  bottomOffset: number
}

interface State {
  currentTranslate: Position
  keyboardOn: boolean
  keyboardHeight: number
  bottomBarHeight: number
  headerBarHeight: number
  bottomVisible: boolean
}

export default class BottomDrawer extends React.PureComponent<Props, State> {

  static defaultProps = {
    startUp: true,
    backgroundColor: '#ffffff',
    roundedEdges: true,
    shadow: true,
  }

  private TOGGLE_THRESHOLD: number
  private translate1: Position
  private translate2: Position
  private position: Animated.ValueXY
  private panResponder: PanResponderInstance
  private keyboardSafeArea: number
  private keyboardWillShowSub?: EmitterSubscription
  private keyboardWillHideSub?: EmitterSubscription

  constructor(props: Props) {
    super(props)
    this.TOGGLE_THRESHOLD = WINDOW_HEIGHT / 11
    this.translate1 = {
      x: 0,
      y: this.props.topOffset
    }
    this.translate2 = {
      x: 0,
      y: WINDOW_HEIGHT - this.props.bottomOffset
    }
    this.keyboardSafeArea = getBottomSpace()
    this.state = {
      currentTranslate: this.props.startUp ? this.translate1 : this.translate2,
      keyboardOn: false,
      keyboardHeight: this.keyboardSafeArea,
      bottomBarHeight: 0,
      headerBarHeight: 0,
      bottomVisible: true
    }

    this.position = new Animated.ValueXY(this.state.currentTranslate)

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderRelease
    })
  }

  componentDidMount() {
    this.keyboardWillShowSub = Platform.OS === 'ios'
      ? Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
      : Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
    this.keyboardWillHideSub = Platform.OS === 'ios'
      ? Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
      : Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
  }

  componentWillUnmount() {
    this.keyboardWillShowSub!.remove()
    this.keyboardWillHideSub!.remove()
  }

  keyboardWillShow = (event: any) => {
    requestAnimationFrame(() => {
      this.setState({ keyboardOn: true, keyboardHeight: event.endCoordinates.height })
    })
    this.transitionTo(this.translate1)
  }

  keyboardWillHide = () => {
    requestAnimationFrame(() => {
      this.setState({ keyboardOn: false, keyboardHeight: this.keyboardSafeArea })
    })
  }

  _getContentHeight(): number {

    return Platform.select({
      ios: WINDOW_HEIGHT - this.translate1.y - this.state.headerBarHeight - this.state.bottomBarHeight,
      android: WINDOW_HEIGHT - this.translate1.y - this.state.headerBarHeight - this.state.bottomBarHeight,
    })
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          ...StyleSheet.absoluteFillObject,
          overflow: 'hidden',
          backgroundColor: 'transparent'
        }}
        pointerEvents="box-none"
      >
        <Animated.View
          onStartShouldSetResponder={() => {
            Keyboard.dismiss()
          }}
          shouldRasterizeIOS={true}
          renderToHardwareTextureAndroid={true}
          style={[
            { transform: this.position.getTranslateTransform() },
            {
              backgroundColor: this.props.backgroundColor,
            },
            this.props.roundedEdges ? styles.roundedEdges : null,
            this.props.shadow ? styles.shadow : null,
            StyleSheet.absoluteFillObject,
          ]}
        >
          <View
            onLayout={(e) => {
              this.setState({ headerBarHeight: e.nativeEvent.layout.height })
            }}
            style={[
              this.props.roundedEdges ? styles.roundedEdges : null,
            ]}
            {...this.panResponder.panHandlers}
          >
            {this.props.renderHeader()}
          </View>
          <View style={{ height: this._getContentHeight() }}>
            {this.props.children}
          </View>
        </Animated.View>
        {
          this.props.renderBottomBar && this.state.bottomVisible && (
            <Animated.View
              onLayout={(e: any) => {
                this.setState({ bottomBarHeight: e.nativeEvent.layout.height })
              }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: this.props.backgroundColor,
                paddingBottom: Platform.OS === 'android' ? 0 : this.state.keyboardHeight,
                elevation: 20
              }}
            >
              {this.props.renderBottomBar()}
            </Animated.View>
          )
        }
      </KeyboardAvoidingView>
    )
  }

  handlePanResponderMove = (_: any, gesture: PanResponderGestureState) => {
    if (this.swipeInBounds(gesture)) {
      this.position.setValue({ y: this.state.currentTranslate.y + gesture.dy, x: 0 })
    } else {
      this.position.setValue({ y: this.translate1.y - this.calculateEase(gesture), x: 0 })
    }
  }

  handlePanResponderRelease = (_: any, gesture: PanResponderGestureState) => {
    const { currentTranslate } = this.state
    if (gesture.dy > this.TOGGLE_THRESHOLD && currentTranslate.y === this.translate1.y) {
      this.transitionTo(this.translate2)
      this.setState({ bottomVisible: false })
    } else if (gesture.dy < -this.TOGGLE_THRESHOLD && currentTranslate.y === this.translate2.y) {
      this.transitionTo(this.translate1)
      this.setState({ bottomVisible: true })
    } else {
      this.resetPosition()
    }
  }

  // returns true if the swipe is within the height of the drawer.
  swipeInBounds(gesture: PanResponderGestureState) {
    return this.state.currentTranslate.y + gesture.dy > this.translate1.y
  }

  // when the user swipes the drawer above its height, this calculates
  // the drawer's slowing upward ease.
  calculateEase(gesture: PanResponderGestureState) {
    return Math.min(Math.sqrt(gesture.dy * -1), WINDOW_HEIGHT)
  }

  transitionTo(position: Position) {
    Animated.spring(this.position, {
      toValue: position,
      useNativeDriver
    }).start()
    this.setState({ currentTranslate: position })
  }

  resetPosition() {
    Animated.spring(this.position, {
      toValue: this.state.currentTranslate,
      useNativeDriver
    }).start()
  }

}
