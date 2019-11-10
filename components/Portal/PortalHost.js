"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const PortalManager_1 = __importDefault(require("./PortalManager"));
exports.PortalContext = react_1.default.createContext(null);
class PortalHost extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.nextKey = 0;
        this.queue = [];
        this.setManager = (manager) => {
            this.manager = manager;
        };
        this.mount = (children) => {
            const key = this.nextKey++;
            if (this.manager) {
                this.manager.mount(key, children);
            }
            else {
                this.queue.push({ type: 'mount', key, children });
            }
            return key;
        };
        this.update = (key, children) => {
            if (this.manager) {
                this.manager.update(key, children);
            }
            else {
                const op = { type: 'mount', key, children };
                const index = this.queue.findIndex(o => o.type === 'mount' || (o.type === 'update' && o.key === key));
                if (index > -1) {
                    this.queue[index] = op;
                }
                else {
                    this.queue.push(op);
                }
            }
        };
        this.unmount = (key) => {
            if (this.manager) {
                this.manager.unmount(key);
            }
            else {
                this.queue.push({ type: 'unmount', key });
            }
        };
    }
    componentDidMount() {
        const manager = this.manager;
        const queue = this.queue;
        while (queue.length && manager) {
            const action = queue.pop();
            if (action) {
                switch (action.type) {
                    case 'mount':
                        manager.mount(action.key, action.children);
                        break;
                    case 'update':
                        manager.update(action.key, action.children);
                        break;
                    case 'unmount':
                        manager.unmount(action.key);
                        break;
                }
            }
        }
    }
    render() {
        return (<exports.PortalContext.Provider value={{
            mount: this.mount,
            update: this.update,
            unmount: this.unmount,
        }}>
        
        <react_native_1.View style={styles.container} collapsable={false}>
          {this.props.children}
        </react_native_1.View>
        <PortalManager_1.default ref={this.setManager}/>
      </exports.PortalContext.Provider>);
    }
}
exports.default = PortalHost;
PortalHost.displayName = 'Portal.Host';
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
});
