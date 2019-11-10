import React from 'react';
export default class PortalConsumer extends React.PureComponent {
    async componentDidMount() {
        this._checkManager();
        await Promise.resolve();
        this.key = this.props.manager.mount(this.props.children);
    }
    componentDidUpdate() {
        this._checkManager();
        this.props.manager.update(this.key, this.props.children);
    }
    componentWillUnmount() {
        this._checkManager();
        this.props.manager.unmount(this.key);
    }
    _checkManager() {
        if (!this.props.manager) {
            throw new Error('Looks like you forgot to wrap your root component with `Portal.Host`');
        }
    }
    render() {
        return null;
    }
}
