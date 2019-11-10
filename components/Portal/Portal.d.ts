import React from 'react';
import PortalHost from './PortalHost';
interface Props {
    children: React.ReactNode;
}
declare class Portal extends React.PureComponent<Props> {
    static Host: typeof PortalHost;
    render(): JSX.Element;
}
export default Portal;
