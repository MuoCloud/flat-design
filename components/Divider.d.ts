import React from 'react';
import { ViewProps } from 'react-native';
import { BoxProps } from '../types/common-props';
interface Props extends BoxProps, ViewProps {
    color?: string;
    height?: number;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
