import React from 'react';
import { TopNavigationProps } from 'react-native-ui-kitten';
interface Props extends TopNavigationProps {
    color?: string;
    titleColor?: string;
    barStyle?: 'dark-content' | 'light-content';
    border?: {
        color: string;
        width: number;
    };
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
