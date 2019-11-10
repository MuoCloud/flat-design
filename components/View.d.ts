import React from 'react';
import { ViewProps } from 'react-native';
interface Props extends ViewProps {
    flex?: number;
    color?: string;
    row?: boolean;
    column?: boolean;
    verticalAlign?: 'top' | 'middle' | 'bottom';
    align?: 'left' | 'center' | 'right';
    radius?: number;
    padding?: number;
    margin?: number;
    fadeIn?: boolean;
    enableBottomSpace?: boolean;
    children?: React.ReactNode;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
