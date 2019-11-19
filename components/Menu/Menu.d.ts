import React from 'react';
interface Props {
    renderItem: React.ReactNode;
    children: React.ReactNode;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>>;
export default _default;
