import React, { Component } from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { AlertActions, UserActions, AttachmentActions } from 'app/store/actions'
import { UserSelectors, AttachmentSelectors } from 'app/store/selectors'
import { NavigationIcon } from 'app/components'
import Uploads from './Uploads'
import menuIcon from 'assets/img/menu-icon.png'
import addIcon from 'assets/img/add-icon.png'
import logoImg from 'assets/img/logo.png'

let connectProps = { ...AlertActions, ...UserActions, ...AttachmentActions }
let connectState = state => ({
  currentUser: UserSelectors.current(state),
  attachments: AttachmentSelectors.list(state)
})
let enhancer = connect(connectState, connectProps)

class LoginScreen extends Component {
  static navigationOptions = {
    header: () => ({
      tintColor: '#FFF',
      style: {
        backgroundColor: '#007EE5'
      },
      title: <Image source={logoImg} style={{ width: 35, height: 35 }} />,
      left: <NavigationIcon image={menuIcon} />,
      right: <NavigationIcon image={addIcon} />
    })
  }

  render () {
    return <Uploads {...this.props} />
  }
}

export default enhancer(LoginScreen)
