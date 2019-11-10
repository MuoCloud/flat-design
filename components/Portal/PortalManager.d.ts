import React from 'react';
interface State {
    portals: Array<{
        key: number;
        children: React.ReactNode;
    }>;
}
export default class PortalManager extends React.PureComponent<{}, State> {
    state: State;
    mount: (key: number, children: React.ReactNode) => void;
    update: (key: number, children: React.ReactNode) => void;
    unmount: (key: number) => void;
    render(): JSX.Element[];
}
export {};
