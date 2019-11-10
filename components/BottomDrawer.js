"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
const WINDOW_HEIGHT = react_native_1.Dimensions.get('window').height;
const useNativeDriver = true;
const styles = react_native_1.StyleSheet.create({
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
});
class BottomDrawer extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.keyboardWillShow = (event) => {
            requestAnimationFrame(() => {
                this.setState({ keyboardOn: true, keyboardHeight: event.endCoordinates.height });
            });
            this.transitionTo(this.translate1);
        };
        this.keyboardWillHide = () => {
            requestAnimationFrame(() => {
                this.setState({ keyboardOn: false, keyboardHeight: this.keyboardSafeArea });
            });
        };
        this.handlePanResponderMove = (_, gesture) => {
            if (this.swipeInBounds(gesture)) {
                this.position.setValue({ y: this.state.currentTranslate.y + gesture.dy, x: 0 });
            }
            else {
                this.position.setValue({ y: this.translate1.y - this.calculateEase(gesture), x: 0 });
            }
        };
        this.handlePanResponderRelease = (_, gesture) => {
            const { currentTranslate } = this.state;
            if (gesture.dy > this.TOGGLE_THRESHOLD && currentTranslate.y === this.translate1.y) {
                this.transitionTo(this.translate2);
                this.setState({ bottomVisible: false });
            }
            else if (gesture.dy < -this.TOGGLE_THRESHOLD && currentTranslate.y === this.translate2.y) {
                this.transitionTo(this.translate1);
                this.setState({ bottomVisible: true });
            }
            else {
                this.resetPosition();
            }
        };
        this.TOGGLE_THRESHOLD = WINDOW_HEIGHT / 11;
        this.translate1 = {
            x: 0,
            y: this.props.topOffset
        };
        this.translate2 = {
            x: 0,
            y: WINDOW_HEIGHT - this.props.bottomOffset
        };
        this.keyboardSafeArea = react_native_iphone_x_helper_1.getBottomSpace();
        this.state = {
            currentTranslate: this.props.startUp ? this.translate1 : this.translate2,
            keyboardOn: false,
            keyboardHeight: this.keyboardSafeArea,
            bottomBarHeight: 0,
            headerBarHeight: 0,
            bottomVisible: true
        };
        this.position = new react_native_1.Animated.ValueXY(this.state.currentTranslate);
        this.panResponder = react_native_1.PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: this.handlePanResponderMove,
            onPanResponderRelease: this.handlePanResponderRelease
        });
    }
    componentDidMount() {
        this.keyboardWillShowSub = react_native_1.Platform.OS === 'ios'
            ? react_native_1.Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
            : react_native_1.Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
        this.keyboardWillHideSub = react_native_1.Platform.OS === 'ios'
            ? react_native_1.Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
            : react_native_1.Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
    }
    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }
    _getContentHeight() {
        return react_native_1.Platform.select({
            ios: WINDOW_HEIGHT - this.translate1.y - this.state.headerBarHeight - this.state.bottomBarHeight,
            android: WINDOW_HEIGHT - this.translate1.y - this.state.headerBarHeight - this.state.bottomBarHeight,
        });
    }
    render() {
        return (<react_native_1.KeyboardAvoidingView behavior="padding" style={{
            ...react_native_1.StyleSheet.absoluteFillObject,
            overflow: 'hidden',
            backgroundColor: 'transparent'
        }} pointerEvents="box-none">
        <react_native_1.Animated.View onStartShouldSetResponder={() => {
            react_native_1.Keyboard.dismiss();
        }} shouldRasterizeIOS={true} renderToHardwareTextureAndroid={true} style={[
            { transform: this.position.getTranslateTransform() },
            {
                backgroundColor: this.props.backgroundColor,
            },
            this.props.roundedEdges ? styles.roundedEdges : null,
            this.props.shadow ? styles.shadow : null,
            react_native_1.StyleSheet.absoluteFillObject,
        ]}>
          <react_native_1.View onLayout={(e) => {
            this.setState({ headerBarHeight: e.nativeEvent.layout.height });
        }} style={[
            this.props.roundedEdges ? styles.roundedEdges : null,
        ]} {...this.panResponder.panHandlers}>
            {this.props.renderHeader()}
          </react_native_1.View>
          <react_native_1.View style={{ height: this._getContentHeight() }}>
            {this.props.children}
          </react_native_1.View>
        </react_native_1.Animated.View>
        {this.props.renderBottomBar && this.state.bottomVisible && (<react_native_1.Animated.View onLayout={(e) => {
            this.setState({ bottomBarHeight: e.nativeEvent.layout.height });
        }} style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: this.props.backgroundColor,
            paddingBottom: react_native_1.Platform.OS === 'android' ? 0 : this.state.keyboardHeight,
            elevation: 20
        }}>
              {this.props.renderBottomBar()}
            </react_native_1.Animated.View>)}
      </react_native_1.KeyboardAvoidingView>);
    }
    swipeInBounds(gesture) {
        return this.state.currentTranslate.y + gesture.dy > this.translate1.y;
    }
    calculateEase(gesture) {
        return Math.min(Math.sqrt(gesture.dy * -1), WINDOW_HEIGHT);
    }
    transitionTo(position) {
        react_native_1.Animated.spring(this.position, {
            toValue: position,
            useNativeDriver
        }).start();
        this.setState({ currentTranslate: position });
    }
    resetPosition() {
        react_native_1.Animated.spring(this.position, {
            toValue: this.state.currentTranslate,
            useNativeDriver
        }).start();
    }
}
exports.default = BottomDrawer;
BottomDrawer.defaultProps = {
    startUp: true,
    backgroundColor: '#ffffff',
    roundedEdges: true,
    shadow: true,
};
