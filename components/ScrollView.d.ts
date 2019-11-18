import React from 'react';
import { ScrollViewProps } from 'react-native';
interface Props extends BoxProps, ScrollViewProps {
    flex?: number;
    color?: string;
    enableBottomSpace?: boolean;
    children?: React.ReactNode;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
