import React from 'react';
import PortalManager from './PortalManager';
interface Props {
    children: React.ReactNode;
}
declare type Operation = {
    type: 'mount';
    key: number;
    children: React.ReactNode;
} | {
    type: 'update';
    key: number;
    children: React.ReactNode;
} | {
    type: 'unmount';
    key: number;
};
export interface PortalMethods {
    mount: (children: React.ReactNode) => number;
    update: (key: number, children: React.ReactNode) => void;
    unmount: (key: number) => void;
}
export declare const PortalContext: React.Context<PortalMethods>;
export default class PortalHost extends React.PureComponent<Props> {
    static displayName: string;
    nextKey: number;
    queue: Operation[];
    manager: PortalManager | null | undefined;
    componentDidMount(): void;
    setManager: (manager: PortalManager) => void;
    mount: (children: React.ReactNode) => number;
    update: (key: number, children: React.ReactNode) => void;
    unmount: (key: number) => void;
    render(): JSX.Element;
}
export {};
