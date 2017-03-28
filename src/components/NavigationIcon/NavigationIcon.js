import React, { Component, PropTypes } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

class NavigationIcon extends Component {
  static propTypes = {
    image: PropTypes.number.isRequired,
    path: PropTypes.string,
    navigate: PropTypes.func,
    onPress: PropTypes.func,
    params: PropTypes.object
  }

  onPress () {
    const { path, navigate, params } = this.props

    if (path) {
      navigate(path, params)
    }
  }

  render () {
    let { image, onPress } = this.props

    return (
      <TouchableOpacity style={styles.container} onPress={onPress || this.onPress.bind(this)}>
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

export default NavigationIcon
