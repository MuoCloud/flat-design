import React from 'react';
import { KeyboardAvoidingViewProps } from 'react-native';
import { BoxProps } from '../types/common-props';
interface Props extends BoxProps, KeyboardAvoidingViewProps {
    color?: string;
    children: React.ReactNode;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
