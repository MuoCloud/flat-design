import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { ViewProps } from './View';
interface Props extends ViewProps {
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
