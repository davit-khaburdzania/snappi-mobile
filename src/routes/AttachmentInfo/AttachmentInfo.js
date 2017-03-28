import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Moment from 'moment'
import { ImageFooter } from 'app/components'

class AttachmentInfo extends Component {
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
    const date = new Date(attachment.created_at * 1000)

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: attachment.url('medium') }} style={styles.image} />
          <Text style={styles.nameText}>{attachment.name}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <Text style={styles.title}>Uploaded</Text>
            <Text style={styles.text}>{Moment(date).format('MMMM D YYYY')}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Views</Text>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Dimensions</Text>
            <Text style={styles.text}>1275x450</Text>
          </View>
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
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F1F5F6'
  },
  detailsContainer: {
    flex: 5,
    backgroundColor: '#F1F5F6'
  },
  footerContainer: {
    flex: 1,
    backgroundColor: '#007EE5'
  },
  image: {
    height: 150,
    width: 250
  },
  nameText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    color: '#8B999F',
    paddingTop: 20,
    letterSpacing: 2.45
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDE1E2',
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    color: '#8B999F',
    letterSpacing: 2.47
  },
  text: {
    fontFamily: 'OpenSans',
    fontSize: 14,
    color: '#8B999F',
    letterSpacing: 2.47
  }
})

export default AttachmentInfo
