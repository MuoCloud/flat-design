import React from 'react';
import { StyleSheet, View } from 'react-native';
import PortalManager from './PortalManager';
export const PortalContext = React.createContext(null);
export default class PortalHost extends React.PureComponent {
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
        return (<PortalContext.Provider value={{
            mount: this.mount,
            update: this.update,
            unmount: this.unmount,
        }}>
        
        <View style={styles.container} collapsable={false}>
          {this.props.children}
        </View>
        <PortalManager ref={this.setManager}/>
      </PortalContext.Provider>);
    }
}
PortalHost.displayName = 'Portal.Host';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
