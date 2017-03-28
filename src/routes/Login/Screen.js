import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AlertActions, UserActions } from 'app/store/actions'
import { UserSelectors } from 'app/store/selectors'
import Login from './Login'

let connectProps = { ...UserActions, ...AlertActions }
let connectState = state => ({ currentUser: UserSelectors.current(state) })
let enhancer = connect(connectState, connectProps)

class LoginScreen extends Component {
  static navigationOptions = {
    header: () => ({
      style: {
        backgroundColor: '#F1F5F6',
        borderBottomWidth: 0
      }
    })
  }

  componentWillReceiveProps (nextProps) {
    let user = nextProps.currentUser

    if (user && user.id) {
      this.props.navigation.navigate('Uploads', { fromSignin: true })
    }
  }

  render () {
    return <Login {...this.props} />
  }
}

export default enhancer(LoginScreen)
