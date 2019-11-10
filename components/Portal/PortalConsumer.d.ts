import React from 'react';
import { PortalMethods } from './PortalHost';
interface Props {
    manager: PortalMethods;
    children: React.ReactNode;
}
export default class PortalConsumer extends React.PureComponent<Props> {
    private key;
    componentDidMount(): Promise<void>;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    _checkManager(): void;
    render(): any;
}
export {};
