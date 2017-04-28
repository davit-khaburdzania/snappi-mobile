import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Video from 'react-native-video'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { ImageFooter } from 'app/components'

class Attachment extends Component {
  static propTypes = {
    attachment: ImmutablePropTypes.record.isRequired,
    removeAttachment: PropTypes.func.isRequired,
    updateAttachment: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  }

  remove () {
    const { attachment, removeAttachment, navigation } = this.props

    removeAttachment(attachment.id)
    navigation.goBack()
  }

  render () {
    const { attachment, updateAttachment } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {
            attachment.type === 'video'
            ? <Video source={{ uri: attachment.url() }} resizeMode='contain' paused={false} style={styles.video} />
            : <Image source={{ uri: attachment.url() }} style={styles.image} />
          }
        </View>
        <ImageFooter
          updateAttachment={updateAttachment}
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
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})

export default Attachment
