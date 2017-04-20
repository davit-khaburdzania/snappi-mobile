import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { AlertActions, UserActions } from 'app/store/actions'
import { UserSelectors } from 'app/store/selectors'
import Login from './Login'

let connectProps = { ...UserActions, ...AlertActions }
let connectState = state => ({ currentUser: UserSelectors.current(state) })
let enhancer = connect(connectState, connectProps)

class LoginScreen extends Component {
  static propTypes = {
    currentUser: ImmutablePropTypes.record,
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = {
    header: () => ({
      visible: false
    })
  }

  componentWillMount () {
    let user = this.props.currentUser
    if (user && user.id) this.gotoUploads()
  }

  componentWillReceiveProps (nextProps) {
    let user = nextProps.currentUser
    if (user && user.id) this.gotoUploads()
  }

  gotoUploads () {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Attachments', params: { fromSignin: true } })
      ]
    })

    this.props.navigation.dispatch(resetAction)
  }

  render () {
    return <Login {...this.props} />
  }
}

export default enhancer(LoginScreen)
