import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import Navigation from 'app/routes'

const connectState = state => ({
  nav: state.nav
})
const enhancer = connect(connectState)

class AppNavigation extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  }
  render () {
    return (
      <Navigation navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav
      })} />
    )
  }
}

export default enhancer(AppNavigation)
