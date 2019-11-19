import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { ViewProps } from './View';
interface Props extends ViewProps {
    sources: ImageSourcePropType[];
    size?: number;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
