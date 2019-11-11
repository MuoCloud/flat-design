import React from 'react';
import { GestureResponderEvent, ViewProps } from 'react-native';
interface Props extends ViewProps {
    flex?: number;
    color?: string;
    activeColor?: string;
    row?: boolean;
    column?: boolean;
    wrap?: boolean;
    verticalAlign?: 'top' | 'middle' | 'bottom';
    align?: 'left' | 'center' | 'right';
    radius?: number;
    padding?: number;
    margin?: number;
    enableBottomSpace?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
    children?: React.ReactNode;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
