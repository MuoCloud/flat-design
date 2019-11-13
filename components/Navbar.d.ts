import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
interface ControlProps {
    color?: string;
    height?: number;
    size?: number;
}
declare type Controls = React.ReactNode | React.ReactNode[] | ((props: ControlProps) => React.ReactNode[]);
interface Props {
    color?: string;
    borderColor?: string;
    border?: boolean;
    textColor?: string;
    textSize?: number;
    barStyle?: 'light-content' | 'dark-content';
    height?: number;
    style?: ViewStyle;
    title?: string;
    titleStyle?: TextStyle;
    leftControls?: Controls;
    rightControls?: Controls;
    back?: boolean;
    onBack?: () => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
