import React from 'react';
import { GestureResponderEvent, ViewProps } from 'react-native';
import { IconPack } from './Icon';
interface Props extends ViewProps {
    color?: string;
    activeColor?: string;
    textColor?: string;
    enableBottomSpace?: boolean;
    icon?: string;
    iconPack?: IconPack;
    onPress?: (event: GestureResponderEvent) => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
