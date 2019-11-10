import React from 'react'
import { PortalMethods } from './PortalHost'

interface Props {
  manager: PortalMethods
  children: React.ReactNode
}

export default class PortalConsumer extends React.PureComponent<Props> {
  private key: number

  async componentDidMount() {
    this._checkManager()

    // Delay updating to prevent React from going to infinite loop
    await Promise.resolve()

    this.key = this.props.manager.mount(this.props.children)
  }

  componentDidUpdate() {
    this._checkManager()

    this.props.manager.update(this.key, this.props.children)
  }

  componentWillUnmount() {
    this._checkManager()

    this.props.manager.unmount(this.key)
  }

  _checkManager() {
    if (!this.props.manager) {
      throw new Error(
        'Looks like you forgot to wrap your root component with `Portal.Host`'
      )
    }
  }
  render() {
    return null
  }
}
