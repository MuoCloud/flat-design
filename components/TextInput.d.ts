import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { BoxProps } from '../types/common-props';
interface Props extends BoxProps, TextInputProps {
    useSingleLinePadding?: boolean;
    border?: boolean;
    borderColor?: string;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<TextInput>>>;
export default _default;
