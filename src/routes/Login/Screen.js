import React, { Component } from 'react'
import Login from './Login'

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login'
  }

  render () {
    return <Login {...this.props} />
  }
}
