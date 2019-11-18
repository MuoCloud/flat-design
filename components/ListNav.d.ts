import React from 'react';
import { GestureResponderEvent, ViewProps } from 'react-native';
interface Props extends BoxProps, ViewProps {
    color?: string;
    backgroundColor?: string;
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
