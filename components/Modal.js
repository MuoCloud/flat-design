import React from 'react';
import { Animated, BackHandler, Easing, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
class Modal extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            opacity: new Animated.Value(this.props.visible ? 1 : 0),
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
            BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
            BackHandler.addEventListener('hardwareBackPress', this.handleBack);
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration,
                easing: Easing.ease,
                useNativeDriver: true,
            }).start();
        };
        this.hideModal = () => {
            const { duration = 280 } = this.props;
            BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration,
                easing: Easing.ease,
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
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    }
    render() {
        if (!this.state.rendered) {
            return null;
        }
        const { children, dismissable, contentContainerStyle, backdropColor = 'rgba(0, 0, 0, .25)' } = this.props;
        return (<Animated.View pointerEvents={this.props.visible ? 'auto' : 'none'} accessibilityViewIsModal={true} accessibilityLiveRegion="polite" style={StyleSheet.absoluteFill}>
        <TouchableWithoutFeedback onPress={dismissable ? this.hideModal : undefined}>
          <Animated.View style={[
            styles.backdrop,
            { backgroundColor: backdropColor, opacity: this.state.opacity },
        ]}/>
        </TouchableWithoutFeedback>
        <SafeAreaView style={styles.wrapper}>
          <Animated.View style={[
            { opacity: this.state.opacity },
            styles.content,
            contentContainerStyle,
        ]}>
            {children}
          </Animated.View>
        </SafeAreaView>
      </Animated.View>);
    }
}
Modal.defaultProps = {
    dismissable: true,
    visible: false,
};
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
});
export default Modal;
