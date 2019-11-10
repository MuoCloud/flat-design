import React from 'react'
import { StyleSheet, View } from 'react-native'
import PortalManager from './PortalManager'

interface Props {
  children: React.ReactNode
}

type Operation =
  | { type: 'mount'; key: number; children: React.ReactNode }
  | { type: 'update'; key: number; children: React.ReactNode }
  | { type: 'unmount'; key: number }

export interface PortalMethods {
  mount: (children: React.ReactNode) => number
  update: (key: number, children: React.ReactNode) => void
  unmount: (key: number) => void
}

export const PortalContext = React.createContext<PortalMethods>(null as any)

export default class PortalHost extends React.PureComponent<Props> {
  static displayName = 'Portal.Host'

  nextKey = 0
  queue: Operation[] = []
  manager: PortalManager | null | undefined

  componentDidMount() {
    const manager = this.manager
    const queue = this.queue

    while (queue.length && manager) {
      const action = queue.pop()
      if (action) {
        // eslint-disable-next-line default-case
        switch (action.type) {
          case 'mount':
            manager.mount(action.key, action.children)
            break
          case 'update':
            manager.update(action.key, action.children)
            break
          case 'unmount':
            manager.unmount(action.key)
            break
        }
      }
    }
  }

  setManager = (manager: PortalManager | undefined | null) => {
    this.manager = manager
  }

  mount = (children: React.ReactNode) => {
    const key = this.nextKey++

    if (this.manager) {
      this.manager.mount(key, children)
    } else {
      this.queue.push({ type: 'mount', key, children })
    }

    return key
  }

  update = (key: number, children: React.ReactNode) => {
    if (this.manager) {
      this.manager.update(key, children)
    } else {
      const op = { type: 'mount', key, children }
      const index = this.queue.findIndex(
        o => o.type === 'mount' || (o.type === 'update' && o.key === key)
      )

      if (index > -1) {
        // @ts-ignore
        this.queue[index] = op
      } else {
        this.queue.push(op as Operation)
      }
    }
  }

  unmount = (key: number) => {
    if (this.manager) {
      this.manager.unmount(key)
    } else {
      this.queue.push({ type: 'unmount', key })
    }
  }

  render() {
    return (
      <PortalContext.Provider
        value={{
          mount: this.mount,
          update: this.update,
          unmount: this.unmount,
        }}
      >
        {/* Need collapsable=false here to clip the elevations, otherwise they appear above Portal components */}
        <View style={styles.container} collapsable={false}>
          {this.props.children}
        </View>
        <PortalManager ref={this.setManager} />
      </PortalContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
