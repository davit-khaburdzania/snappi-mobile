import React, { Component } from 'react'
import { NavigationIcon } from 'app/components'
import Uploads from './Uploads'
import menuIcon from 'assets/img/menu-icon.png'
import addIcon from 'assets/img/add-icon.png'

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: () => ({
      title: 'Uploads',
      left: <NavigationIcon image={menuIcon} />,
      right: <NavigationIcon image={addIcon} />
    })
  }

  render () {
    return <Uploads {...this.props} />
  }
}
