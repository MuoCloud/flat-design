"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
class PortalManager extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            portals: [],
        };
        this.mount = (key, children) => {
            this.setState(state => ({
                portals: [...state.portals, { key, children }],
            }));
        };
        this.update = (key, children) => this.setState(state => ({
            portals: state.portals.map(item => {
                if (item.key === key) {
                    return { ...item, children };
                }
                return item;
            }),
        }));
        this.unmount = (key) => this.setState(state => ({
            portals: state.portals.filter(item => item.key !== key),
        }));
    }
    render() {
        return this.state.portals.map(({ key, children }) => (<react_native_1.View key={key} collapsable={false} pointerEvents="box-none" style={react_native_1.StyleSheet.absoluteFill}>
        {children}
      </react_native_1.View>));
    }
}
exports.default = PortalManager;
