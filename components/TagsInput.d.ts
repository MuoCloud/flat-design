import React from 'react';
import { TagProps } from './Tag';
import { ViewProps } from './View';
interface Props extends ViewProps {
    initialTags?: string[];
    placeholder?: string;
    onChangeTags?: (tags: string[]) => void;
    tagComponent: React.FunctionComponent<TagProps>;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
