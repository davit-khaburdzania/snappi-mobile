import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, Clipboard } from 'react-native'
import { withNavigation } from 'react-navigation'
import TimeAgo from 'react-native-timeago'
import copyIcon from 'assets/img/copy-icon.png'
import noImage from 'assets/img/no-image.png'

class Attachment extends Component {
  onPress () {
    this.props.navigation.navigate('Attachment', { id: this.props.attachment.id })
  }

  render () {
    const { attachment } = this.props
    const url = attachment.url('normal')
    const source = attachment.token ? { uri: url } : noImage
    const createdAt = attachment.created_at * 1000

    return (
      <TouchableOpacity style={styles.imageContainer} onPress={this.onPress.bind(this)}>
        <Image source={source} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.hoursAgo}>
            <TimeAgo time={createdAt} />
          </Text>
          <TouchableOpacity onPress={() => Clipboard.setString(url)}>
            <Image source={copyIcon} style={styles.copyIcon} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#DDE1E2'
  },
  image: {
    alignSelf: 'stretch',
    height: 200
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#FFF',
    paddingLeft: 20,
    paddingRight: 20
  },
  hoursAgo: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 14,
    color: '#666'
  },
  copyIcon: {
    width: 20,
    height: 20
  }
})

export default withNavigation(Attachment)
