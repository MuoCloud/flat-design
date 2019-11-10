import React from 'react';
import { TextStyle, TouchableOpacityProps } from 'react-native';
interface Props extends Partial<TouchableOpacityProps> {
    children: string;
    textStyle?: TextStyle;
    color?: string;
    textColor?: string;
    bold?: boolean;
}
export { Props as TagProps };
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
