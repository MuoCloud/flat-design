import React from 'react';
import { ViewProps } from 'react-native';
interface Props extends ViewProps {
    flex?: number;
    children: React.ReactNode;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;