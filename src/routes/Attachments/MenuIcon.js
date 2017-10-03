import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { NavigationIcon } from 'app/components'
import { AttachmentActions } from 'app/store/actions'
import menuIcon from 'app/assets/img/menu-icon.png'

const connectProps = { ...AttachmentActions }
const enhancer = connect(null, connectProps)

const MenuIcon = ({ toggleMenu }) => (
  <NavigationIcon image={menuIcon} onPress={() => toggleMenu()} />
)

MenuIcon.propTypes = {
  toggleMenu: PropTypes.func.isRequired
}


export default enhancer(MenuIcon)
