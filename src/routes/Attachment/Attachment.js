import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { ImageFooter } from 'app/components'

class Attachment extends Component {
  static propTypes = {
    attachment: ImmutablePropTypes.record.isRequired,
    removeAttachment: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  }

  remove () {
    const { attachment, removeAttachment, navigation } = this.props

    removeAttachment(attachment.id)
    navigation.goBack()
  }

  render () {
    const { attachment } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: attachment.url('original') }} style={styles.image} />
        </View>
        <ImageFooter
          attachment={attachment}
          remove={this.remove.bind(this)}
        />
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flex: 10,
    justifyContent: 'center',
    backgroundColor: '#4A4A4A'
  },
  footerContainer: {
    flex: 1,
    backgroundColor: '#007EE5'
  },
  image: {
    height: 250
  }
})

export default Attachment
