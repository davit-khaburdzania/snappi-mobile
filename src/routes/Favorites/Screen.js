import React, { Component, PropTypes } from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { AlertActions, UserActions, AttachmentActions } from 'app/store/actions'
import { UserSelectors, AttachmentSelectors } from 'app/store/selectors'
import NavigationIcon from 'app/components/NavigationIcon/NavigationIcon'
import Attachments from '../Attachments/Attachments'
import MenuIcon from '../Attachments/MenuIcon'
import addIcon from 'app/assets/img/add-icon.png'
import logoImg from 'app/assets/img/logo.png'

let connectProps = { ...AlertActions, ...UserActions, ...AttachmentActions }
let connectState = (state, props) => ({
  currentUser: UserSelectors.current(state),
  attachments: AttachmentSelectors.favorites(state)
})
let enhancer = connect(connectState, connectProps)

class AttachmentsScreen extends Component {
  static propTypes = {
    getFavorites: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = {
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#007EE5'
    },
    title: <Image source={logoImg} style={{ width: 35, height: 35 }} />,
    headerLeft: <MenuIcon />,
    headerRight: <NavigationIcon image={addIcon} />
  }

  componentDidMount () {
    this.props.getFavorites()
  }

  render () {
    return <Attachments {...this.props} />
  }
}

export default enhancer(AttachmentsScreen)
