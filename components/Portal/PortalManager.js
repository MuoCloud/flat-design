import React from 'react';
import { StyleSheet, View } from 'react-native';
export default class PortalManager extends React.PureComponent {
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
        return this.state.portals.map(({ key, children }) => (<View key={key} collapsable={false} pointerEvents="box-none" style={StyleSheet.absoluteFill}>
        {children}
      </View>));
    }
}
