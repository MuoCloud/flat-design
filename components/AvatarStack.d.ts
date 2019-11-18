import React from 'react';
import { ImageSourcePropType, ViewProps } from 'react-native';
import { BoxProps } from '../types/common-props';
interface Props extends BoxProps, ViewProps {
    sources: ImageSourcePropType[];
    size?: number;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
