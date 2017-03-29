import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Drawer from 'react-native-drawer'
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
  static propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired,
    setMenu: PropTypes.func.isRequired
  }

  render () {
    const { menuOpen, setMenu, logoutUser } = this.props

    return (
      <Drawer
        content={<Menu menuOpen={menuOpen} logoutUser={logoutUser} />}
        openDrawerOffset={100}
        tweenHandler={Drawer.tweenPresets.parallax}
        open={menuOpen}
        tapToClose
        onClose={() => setMenu(false)}
      >
        {this.props.children}
      </Drawer>
    )
  }
}

export default enhancer(SideMenuContainer)
