"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class PortalConsumer extends react_1.default.PureComponent {
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
exports.default = PortalConsumer;
