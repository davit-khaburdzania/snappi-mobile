import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AlertActions, UserActions } from 'app/store/actions'
import { UserSelectors } from 'app/store/selectors'
import { NavigationIcon } from 'app/components'
import Uploads from './Uploads'
import menuIcon from 'assets/img/menu-icon.png'
import addIcon from 'assets/img/add-icon.png'

let connectProps = { ...UserActions, ...AlertActions }
let connectState = state => ({ currentUser: UserSelectors.current(state) })
let enhancer = connect(connectState, connectProps)

class LoginScreen extends Component {
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

export default enhancer(LoginScreen)
