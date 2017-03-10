import React, { Component } from 'react'
import Signup from './Signup'

export default class SignupScreen extends Component {
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

  render () {
    return <Signup {...this.props} />
  }
}
