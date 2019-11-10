import React from 'react';
import { TextProps } from 'react-native';
interface Props extends TextProps {
    size?: number;
    lineHeight?: number;
    bold?: boolean;
    color?: string;
    children?: string | string[];
}
export declare const setDefaultTextColor: (color: string) => void;
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
