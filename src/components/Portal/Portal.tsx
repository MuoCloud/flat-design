import React from 'react'
import PortalConsumer from './PortalConsumer'
import PortalHost, { PortalContext, PortalMethods } from './PortalHost'

interface Props {
  /**
   * Content of the `Portal`.
   */
  children: React.ReactNode
}

class Portal extends React.PureComponent<Props> {
  // @component ./PortalHost.tsx
  static Host = PortalHost

  render() {
    const { children } = this.props

    return (
      <PortalContext.Consumer>
        {manager => (
          <PortalConsumer manager={manager as PortalMethods}>
            {children}
          </PortalConsumer>
        )}
      </PortalContext.Consumer>
    )
  }
}

export default Portal
