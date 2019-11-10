import React from 'react';
import { GestureResponderEvent, TextStyle, ViewStyle } from 'react-native';
interface Props {
    children: string;
    disabled?: boolean;
    disabledTextColor?: string;
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
    onPress: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    icon?: string;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
