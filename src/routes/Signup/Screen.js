import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AlertActions, UserActions } from 'app/store/actions'
import { UserSelectors } from 'app/store/selectors'
import Signup from './Signup'

let connectProps = { ...UserActions, ...AlertActions }
let connectState = state => ({ currentUser: UserSelectors.current(state) })
let enhancer = connect(connectState, connectProps)

class SignupScreen extends Component {
  static navigationOptions = {
    header: () => ({
      title: 'Create account',
      tintColor: '#8B999F',
      style: {
        backgroundColor: '#FFF'
      },
      titleStyle: {
        fontFamily: 'OpenSans-Semibold',
        fontSize: 17
      }
    })
  }

  componentWillReceiveProps (nextProps) {
    let user = nextProps.currentUser
    console.log(user)

    if (user && user.auth_token) {
      this.props.navigation.navigate('Uploads', { fromSignUp: true })
    }
  }

  render () {
    return <Signup {...this.props} />
  }
}

export default enhancer(SignupScreen)