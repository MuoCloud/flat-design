"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
class Modal extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            opacity: new react_native_1.Animated.Value(this.props.visible ? 1 : 0),
            rendered: this.props.visible,
        };
        this.handleBack = () => {
            if (this.props.dismissable) {
                this.hideModal();
            }
            return true;
        };
        this.showModal = () => {
            const { duration = 280 } = this.props;
            react_native_1.BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
            react_native_1.BackHandler.addEventListener('hardwareBackPress', this.handleBack);
            react_native_1.Animated.timing(this.state.opacity, {
                toValue: 1,
                duration,
                easing: react_native_1.Easing.ease,
                useNativeDriver: true,
            }).start();
        };
        this.hideModal = () => {
            const { duration = 280 } = this.props;
            react_native_1.BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
            react_native_1.Animated.timing(this.state.opacity, {
                toValue: 0,
                duration,
                easing: react_native_1.Easing.ease,
                useNativeDriver: true,
            }).start(({ finished }) => {
                if (!finished) {
                    return;
                }
                if (this.props.visible && this.props.onDismiss) {
                    this.props.onDismiss();
                }
                if (this.props.visible) {
                    this.showModal();
                }
                else {
                    this.setState({ rendered: false });
                }
            });
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.visible && !prevState.rendered) {
            return {
                rendered: true,
            };
        }
        return null;
    }
    componentDidUpdate(prevProps) {
        if (prevProps.visible !== this.props.visible) {
            if (this.props.visible) {
                this.showModal();
            }
            else {
                this.hideModal();
            }
        }
    }
    componentWillUnmount() {
        react_native_1.BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    }
    render() {
        if (!this.state.rendered) {
            return null;
        }
        const { children, dismissable, contentContainerStyle, backdropColor = 'rgba(0, 0, 0, .25)' } = this.props;
        return (<react_native_1.Animated.View pointerEvents={this.props.visible ? 'auto' : 'none'} accessibilityViewIsModal={true} accessibilityLiveRegion="polite" style={react_native_1.StyleSheet.absoluteFill}>
        <react_native_1.TouchableWithoutFeedback onPress={dismissable ? this.hideModal : undefined}>
          <react_native_1.Animated.View style={[
            styles.backdrop,
            { backgroundColor: backdropColor, opacity: this.state.opacity },
        ]}/>
        </react_native_1.TouchableWithoutFeedback>
        <react_native_1.SafeAreaView style={styles.wrapper}>
          <react_native_1.Animated.View style={[
            { opacity: this.state.opacity },
            styles.content,
            contentContainerStyle,
        ]}>
            {children}
          </react_native_1.Animated.View>
        </react_native_1.SafeAreaView>
      </react_native_1.Animated.View>);
    }
}
Modal.defaultProps = {
    dismissable: true,
    visible: false,
};
const styles = react_native_1.StyleSheet.create({
    backdrop: {
        flex: 1,
    },
    wrapper: {
        ...react_native_1.StyleSheet.absoluteFillObject,
        justifyContent: 'center',
    },
    content: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
});
exports.default = Modal;
