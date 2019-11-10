import React from 'react';
import { ImageSourcePropType, ViewProps } from 'react-native';
interface Props extends ViewProps {
    sources: ImageSourcePropType[];
    size?: number;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
