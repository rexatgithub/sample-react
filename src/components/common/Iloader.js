import React, { Component } from 'react'
import { Overlay, Mask } from '@instructure/ui-overlays'
import { Spinner } from '@instructure/ui-elements'

class ILoader extends Component {
  state = {
    open: false,
  }

  componentDidMount() {
    this.setState({ open: true })
  }

  componentWillUnmount() {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <Overlay
        open={open}
        transition="fade"
        label="Loading the awesome"
        shouldReturnFocus
        shouldContainFocus
        shouldCloseOnEscape={false}
        onDismiss={() => {
          this.setState({ open: false })
        }}
      >
        <Mask>
          <Spinner title="Loading" size="large" margin="0 0 0 0" />
        </Mask>
      </Overlay>
    )
  }
}

export default ILoader
