import React from 'react';
import { ScrollViewProps } from 'react-native';
import { BoxProps } from '../types/common-props';
interface Props extends BoxProps, ScrollViewProps {
    color?: string;
    enableBottomSpace?: boolean;
    children?: React.ReactNode;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
