import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AlertActions, AttachmentActions } from 'app/store/actions'
import { UserSelectors, AttachmentSelectors } from 'app/store/selectors'
import { NavigationIcon } from 'app/components'
import Attachment from './Attachment'
import infoIcon from 'assets/img/info-icon.png'

const connectProps = { ...AlertActions, ...AttachmentActions }
const connectState = (state, props) => ({
  currentUser: UserSelectors.current(state),
  attachment: AttachmentSelectors.byId(state, props.navigation.state.params.id)
})
const enhancer = connect(connectState, connectProps)

class AttachmentScreen extends Component {
  static navigationOptions = {
    header: ({ state, navigate }) => {
      return {
        tintColor: '#FFF',
        style: {
          backgroundColor: '#007EE5'
        },
        backTitle: null,
        title: 'Image',
        right: (
          <NavigationIcon
            navigate={navigate}
            image={infoIcon}
            path='AttachmentInfo'
            params={{ id: state.params.id }}
          />
        )
      }
    }
  }

  render () {
    return <Attachment {...this.props} />
  }
}

export default enhancer(AttachmentScreen)
