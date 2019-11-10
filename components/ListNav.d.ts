import React from 'react';
import { GestureResponderEvent, ViewStyle } from 'react-native';
interface Props {
    color?: string;
    backgroundColor?: string;
    activeBackgroundColor?: string;
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
