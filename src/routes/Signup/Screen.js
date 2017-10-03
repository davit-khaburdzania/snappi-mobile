import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { AlertActions, UserActions } from 'app/store/actions'
import { UserSelectors } from 'app/store/selectors'
import Signup from './Signup'

let connectProps = { ...UserActions, ...AlertActions }
let connectState = state => ({ currentUser: UserSelectors.current(state) })
let enhancer = connect(connectState, connectProps)

class SignupScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = {
    title: 'Create account',
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#007EE5'
    },
    headerTitleStyle: {
      fontFamily: 'OpenSans-Semibold',
      fontSize: 17
    }
  }

  componentWillReceiveProps (nextProps) {
    let user = nextProps.currentUser

    if (user && user.id) {
      this.props.navigation.navigate('Attachments', { fromSignUp: true })
    }
  }

  render () {
    return <Signup {...this.props} />
  }
}

export default enhancer(SignupScreen)
