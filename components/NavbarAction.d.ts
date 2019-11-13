import React from 'react';
import { GestureResponderEvent } from 'react-native';
interface Props {
    icon?: string;
    color?: string;
    activeColor?: string;
    size?: number;
    height?: number;
    onPress?: (event: GestureResponderEvent) => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
