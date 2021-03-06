import React, { Component, PropTypes } from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { AlertActions, UserActions, AttachmentActions } from 'app/store/actions'
import { UserSelectors, AttachmentSelectors } from 'app/store/selectors'
import { NavigationIcon } from 'app/components'
import ImageUploader from 'app/components/ImageUploader/ImageUploader'
import Attachments from './Attachments'
import MenuIcon from './MenuIcon'
import logoImg from 'app/assets/img/logo.png'

let connectProps = { ...AlertActions, ...UserActions, ...AttachmentActions }
let connectState = (state, props) => ({
  currentUser: UserSelectors.current(state),
  attachments: AttachmentSelectors.list(state, props.navigation.state.params.filter)
})
let enhancer = connect(connectState, connectProps)

class AttachmentsScreen extends Component {
  static propTypes = {
    getAttachments: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = {
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#007EE5'
    },
    title: <Image source={logoImg} style={{ width: 35, height: 35 }} />,
    headerLeft: <MenuIcon />,
    headerRight: <ImageUploader />
  }

  componentDidMount () {
    const filter = this.props.navigation.state.params.filter

    this.props.getAttachments(filter)
  }

  render () {
    return <Attachments {...this.props} />
  }
}

export default enhancer(AttachmentsScreen)
