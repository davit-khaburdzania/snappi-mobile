import React, { PropTypes } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Clipboard } from 'react-native'
import ImmutablePropTypes from 'react-immutable-proptypes'
import garbageIcon from 'assets/img/garbage-icon.png'
import lockIcon from 'assets/img/lock-icon.png'
import starIcon from 'assets/img/star-icon.png'
import starIconActive from 'assets/img/star-icon-active.png'
import copyIcon from 'assets/img/copy-white-icon.png'

const ImageFooter = ({ attachment, remove, updateAttachment }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={remove}>
      <Image source={garbageIcon} style={styles.iconLong} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={lockIcon} style={styles.iconLong} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => updateAttachment(attachment.token, { featured: !attachment.featured })}
    >
      <Image source={attachment.featured ? starIconActive : starIcon} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Clipboard.setString(attachment.url('original'))}>
      <Image source={copyIcon} style={styles.icon} />
    </TouchableOpacity>
  </View>
)

ImageFooter.propTypes = {
  attachment: ImmutablePropTypes.record.isRequired,
  remove: PropTypes.func.isRequired,
  updateAttachment: PropTypes.func.isRequired
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#007EE5'
  },
  icon: {
    width: 24,
    height: 24
  },
  iconLong: {
    width: 20,
    height: 24
  }
})

export default ImageFooter
