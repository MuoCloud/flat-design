import React from 'react';
import { GestureResponderEvent, TextProps } from 'react-native';
interface Props extends TextProps {
    onPress?: (event: GestureResponderEvent) => void;
    size?: number;
    lineHeight?: number;
    bold?: boolean;
    color?: string;
    children?: string | string[];
}
export declare const setDefaultTextColor: (color: string) => void;
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
