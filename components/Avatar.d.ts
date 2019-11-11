import React from 'react';
import { GestureResponderEvent, ImageProps } from 'react-native';
interface Props extends ImageProps {
    size?: number;
    onPress?: (event: GestureResponderEvent) => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
