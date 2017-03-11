import React, { Component } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { MessageBarManager } from 'react-native-message-bar'
import { connect } from 'react-redux'

let enhancer = connect(state => ({ alerts: state.Alert }))

const AlertHOC = WrappedComponent => {
  class AlertComponent extends Component {
    static propTypes = {
      alerts: ImmutablePropTypes.stack.isRequired
    }

    componentWillMount () {
      // console.log(this.props.alerts.size)
    }

    componentWillReceiveProps (nextProps) {
      if (nextProps.alerts.size > 0) {
        let alert = nextProps.alerts.first()

        switch (alert.get('type')) {
          case 'success':
            this.showSuccess(alert.get('list'))
            break
          case 'warning':
            this.showWarning(alert.get('list'))
            break
          case 'error':
            this.showError(alert.get('list'))
            break
          default:
            this.showError(alert.get('list'))
        }

        nextProps.removeAlert()
      }
    }

    showSuccess (list) {
      let message = list.join(', ')

      MessageBarManager.showAlert({
        viewTopOffset: 20,
        message,
        alertType: 'success',
        messageStyle: {
          backgroundColor: '#5cb85c',
          color: '#FFF'
        }
      })
    }

    showWarning (list) {
      let message = list.join(', ')

      MessageBarManager.showAlert({
        viewTopOffset: 20,
        message,
        alertType: 'warning',
        messageStyle: {
          backgroundColor: '#f0ad4e',
          color: '#FFF'
        }
      })
    }

    showError (list) {
      if (!list) return

      let message = list.join('\n')

      MessageBarManager.showAlert({
        viewTopOffset: 20,
        message,
        alertType: 'error',
        messageStyle: {
          backgroundColor: '#d9534f',
          color: '#FFF'
        }
      })
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

  return enhancer(AlertComponent)
}

export default AlertHOC
