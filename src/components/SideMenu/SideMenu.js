import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideMenu from 'react-native-side-menu'
import Menu from './Menu'
import { UserActions, AttachmentActions } from 'app/store/actions'
import { UserSelectors, AttachmentSelectors } from 'app/store/selectors'

let connectProps = {...UserActions, ...AttachmentActions}
let connectState = state => ({
  currentUser: UserSelectors.current(state),
  menuOpen: AttachmentSelectors.menuOpen(state)
})
let enhancer = connect(connectState, connectProps)

class SideMenuContainer extends Component {
  render () {
    return (
      <SideMenu
        menu={<Menu isOpen={this.props.menuOpen} logoutUser={this.props.logoutUser} />}
        isOpen={this.props.menuOpen}
        onMove={() => this.props.setMenu(true)}
        onChange={isOpen => this.props.setMenu(isOpen)}
      >
        {this.props.children}
      </SideMenu>
    )
  }
}

export default enhancer(SideMenuContainer)
