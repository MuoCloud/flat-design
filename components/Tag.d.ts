import React from 'react';
import { GestureResponderEvent, TextStyle, ViewProps } from 'react-native';
interface Props extends BoxProps, ViewProps {
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
