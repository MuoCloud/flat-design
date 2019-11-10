import React from 'react';
import { GestureResponderEvent, ViewStyle } from 'react-native';
interface Props {
    color?: string;
    icon?: string;
    style?: ViewStyle;
    onPress?: (event: GestureResponderEvent) => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
