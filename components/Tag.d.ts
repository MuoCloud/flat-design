import React from 'react';
import { GestureResponderEvent, TextStyle } from 'react-native';
import { ViewProps } from './View';
interface Props extends ViewProps {
    children: string;
    textStyle?: TextStyle;
    color?: string;
    textColor?: string;
    bold?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}
export { Props as TagProps };
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
