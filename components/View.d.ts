import { BoxProps } from '../types/common-props';
import React from 'react';
import { GestureResponderEvent, ViewProps, ViewStyle } from 'react-native';
interface Props extends BoxProps, ViewProps {
    flex?: number;
    color?: string;
    activeColor?: string;
    row?: boolean;
    column?: boolean;
    wrap?: boolean;
    verticalAlign?: 'top' | 'middle' | 'bottom';
    align?: 'left' | 'center' | 'right';
    radius?: number;
    enableBottomSpace?: boolean;
    touchableStyle?: ViewStyle;
    onPress?: (event: GestureResponderEvent) => void;
    children?: React.ReactNode;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
