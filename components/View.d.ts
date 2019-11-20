import React from 'react';
import { GestureResponderEvent, ViewProps, ViewStyle } from 'react-native';
import { BoxProps } from '../types/common-props';
interface Props extends BoxProps, ViewProps {
    color?: string;
    activeColor?: string;
    row?: boolean;
    column?: boolean;
    verticalAlign?: 'top' | 'middle' | 'bottom' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'left' | 'center' | 'right' | 'space-between' | 'space-around' | 'space-evenly';
    height?: number | string;
    width?: number | string;
    radius?: number;
    enableBottomSpace?: boolean;
    touchableStyle?: ViewStyle;
    onPress?: (event: GestureResponderEvent) => void;
    children?: React.ReactNode;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
export { Props as ViewProps };
