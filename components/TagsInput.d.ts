import React from 'react';
import { ViewProps } from 'react-native';
import { TagProps } from './Tag';
interface Props extends ViewProps {
    initialTags?: string[];
    placeholder?: string;
    onChangeTags?: (tags: string[]) => void;
    tagComponent: React.FunctionComponent<TagProps>;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
