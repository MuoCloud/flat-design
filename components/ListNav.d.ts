import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { ViewProps } from './View';
interface Props extends ViewProps {
    color?: string;
    backgroundColor?: string;
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
