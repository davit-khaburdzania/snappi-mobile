import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { AsyncStorage } from 'react-native'
import request from 'axios'
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

    return <Navigation />
  }
}

export default enhancer(App)