import React from 'react';
import { GestureResponderEvent, ViewStyle } from 'react-native';
import { BoxProps } from '../types/common-props';
export declare type IconPack = 'eva' | 'ion' | 'md';
interface Props extends BoxProps {
    size?: number;
    color?: string;
    name?: string;
    pack?: IconPack;
    style?: ViewStyle;
    onPress?: (event: GestureResponderEvent) => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
