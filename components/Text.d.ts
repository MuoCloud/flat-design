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
export declare const setBoldWeight: (weight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900") => void;
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
