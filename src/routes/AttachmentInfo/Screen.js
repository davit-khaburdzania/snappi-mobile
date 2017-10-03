import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AlertActions, AttachmentActions } from 'app/store/actions'
import { UserSelectors, AttachmentSelectors } from 'app/store/selectors'
import AttachmentInfo from './AttachmentInfo'

const connectProps = { ...AlertActions, ...AttachmentActions }
const connectState = (state, props) => ({
  currentUser: UserSelectors.current(state),
  attachment: AttachmentSelectors.byId(state, props.navigation.state.params.id)
})
const enhancer = connect(connectState, connectProps)

class AttachmentInfoScreen extends Component {
  static navigationOptions = {
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#007EE5'
    },
    headerBackTitle: null,
    title: 'Info'
  }

  render () {
    return <AttachmentInfo {...this.props} />
  }
}

export default enhancer(AttachmentInfoScreen)
