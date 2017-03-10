import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class NavigationIcon extends Component {
  render () {
    let { image } = this.props

    return (
      <TouchableOpacity style={styles.container}>
        <Image style={styles.icon} source={image} />
      </TouchableOpacity>
    )
  }
}

let styles = StyleSheet.create({
  container: {

  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginRight: 20
  }
})
