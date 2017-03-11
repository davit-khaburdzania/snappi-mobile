import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'

class Root extends Component {
  render () {
    return (
      <TouchableOpacity onPress={() => this.props.logoutUser()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    )
  }
}

export default Root
