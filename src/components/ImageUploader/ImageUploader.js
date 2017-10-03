import React, { Component, PropTypes } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import { AlertActions, AttachmentActions } from 'app/store/actions'
import addIcon from 'app/assets/img/add-icon.png'

let connectProps = { ...AttachmentActions, ...AlertActions }
let enhancer = connect(null, connectProps)

class ImageUploader extends Component {
  static propTypes = {
    uploadeImage: PropTypes.func.isRequired
  }

  onPress () {
    let options = {
      title: 'Select Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else {
        this.props.uploadeImage({ uri: response.uri, name: response.fileName })
      }
    })
  }

  render () {
    return (
      <TouchableOpacity onPress={this.onPress.bind(this)}>
        <Image style={styles.icon} source={addIcon} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginRight: 20
  }
})

export default enhancer(ImageUploader)
