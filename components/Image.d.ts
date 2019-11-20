import React from 'react';
import { GestureResponderEvent, ImageProps } from 'react-native';
import { BoxProps } from '../types/common-props';
interface Props extends BoxProps, ImageProps {
    backgroundColor?: string;
    onPress?: (event: GestureResponderEvent) => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
