import React, { Component, PropTypes } from 'react'
import { AsyncStorage } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import request from 'axios'
import { MessageBar, MessageBarManager } from 'react-native-message-bar'
import { SideMenu } from 'app/components'
import AppNavigation from './AppNavigation'
import { UserActions, AttachmentActions } from 'app/store/actions'
import { UserSelectors } from 'app/store/selectors'

let connectProps = {...UserActions, ...AttachmentActions}
let connectState = state => ({
  currentUser: UserSelectors.current(state)
})
let enhancer = connect(connectState, connectProps)
console.log('app')

class App extends Component {
  static propTypes = {
    currentUser: ImmutablePropTypes.record,
    validateToken: PropTypes.func.isRequired
  }

  componentWillMount () {
    this.reAuthenticateUser()
  }

  componentDidMount () {
    MessageBarManager.registerMessageBar(this.refs.alert)
  }

  componentWillUnmount () {
    MessageBarManager.unregisterMessageBar()
  }

  async reAuthenticateUser () {
    try {
      let token = await AsyncStorage.getItem('auth_token')
      let uid = await AsyncStorage.getItem('uid')
      let client = await AsyncStorage.getItem('client')

      if (!this.props.currentUser && token) {
        request.defaults.headers.common['access-token'] = token
        request.defaults.headers.common['uid'] = uid
        request.defaults.headers.common['client'] = client
        this.props.validateToken()
      }
    } catch (error) {}
  }

  render () {
    return (
      <SideMenu>
        <AppNavigation />
        <MessageBar ref='alert' />
      </SideMenu>
    )
  }
}

export default enhancer(App)
