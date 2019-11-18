import React from 'react';
import { GestureResponderEvent, ViewProps } from 'react-native';
interface Props extends BoxProps, ViewProps {
    children: string;
    size?: 'large' | 'medium' | 'small';
    disabled?: boolean;
    color?: string;
    textColor?: string;
    textSize?: number;
    round?: boolean;
    bold?: boolean;
    onPress: (event: GestureResponderEvent) => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
