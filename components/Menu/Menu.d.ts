import React from 'react';
interface Props {
    renderItem: JSX.Element;
    children: JSX.Element[];
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>>;
export default _default;
