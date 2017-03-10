import React, { Component } from 'react'
import Login from './Login'

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: () => ({
      visible: false
    })
  }

  render () {
    return <Login {...this.props} />
  }
}
