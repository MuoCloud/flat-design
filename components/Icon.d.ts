import React from 'react';
import { GestureResponderEvent, ViewStyle } from 'react-native';
interface Props {
    size?: number;
    color?: string;
    name?: string;
    pack?: 'eva' | 'ion' | 'md';
    style?: ViewStyle;
    onPress?: (event: GestureResponderEvent) => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
