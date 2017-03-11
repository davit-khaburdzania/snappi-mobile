import React, { Component, PropTypes } from 'react'
import { View, AsyncStorage } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'
import request from 'axios'
import { MessageBar, MessageBarManager } from 'react-native-message-bar'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import Routes from 'app/routes'
import { UserActions } from 'app/store/actions'
import { UserSelectors } from 'app/store/selectors'

let connectProps = {...UserActions}
let connectState = state => ({ currentUser: UserSelectors.current(state) })
let enhancer = connect(connectState, connectProps)

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
    let initialRouteName = this.props.currentUser ? 'Uploads' : 'Login'
    let Navigation = StackNavigator(Routes, {
      initialRouteName,
      headerMode: 'screen'
    })

    return (
      <View style={{ flex: 1 }}>
        <Navigation />
        <MessageBar ref='alert' />
      </View>
    )
  }
}

export default enhancer(App)
