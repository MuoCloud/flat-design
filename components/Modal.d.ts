import React from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
interface Props {
    dismissable?: boolean;
    onDismiss?: () => void;
    visible: boolean;
    children: React.ReactNode;
    contentContainerStyle?: StyleProp<ViewStyle>;
    duration?: number;
    backdropColor?: string;
}
interface State {
    opacity: Animated.Value;
    rendered: boolean;
}
declare class Modal extends React.PureComponent<Props, State> {
    static defaultProps: {
        dismissable: boolean;
        visible: boolean;
    };
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        rendered: boolean;
    };
    state: {
        opacity: Animated.Value;
        rendered: boolean;
    };
    componentDidUpdate(prevProps: Props): void;
    handleBack: () => boolean;
    showModal: () => void;
    hideModal: () => void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default Modal;
