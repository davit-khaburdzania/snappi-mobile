import React, { Component, PropTypes } from 'react'
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import windowsIcon from 'assets/img/windows-icon.png'
import starIcon from 'assets/img/star-icon.png'
import imageIcon from 'assets/img/image-icon.png'
import gifIcon from 'assets/img/gif-icon.png'
import videoIcon from 'assets/img/video-icon.png'
import arrowRightIcon from 'assets/img/arrow-right-icon.png'
import arrowRightBlueIcon from 'assets/img/arrow-right-blue-icon.png'
import logoImage from 'assets/img/logo.png'

class Menu extends Component {
  static propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired,
    setMenu: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  }

  goto (filter) {
    if (filter === 'favorites') {
      return console.log('go to favorites')
    }

    this.props.navigate({
      routeName: 'Attachments',
      params: { filter }
    })

    this.props.setMenu(false)
  }

  render () {
    const { menuOpen, logoutUser } = this.props
    const menuStyle = {
      opacity: menuOpen ? 1 : 0
    }

    return (
      <ScrollView scrollsToTop={false} style={[styles.menu, menuStyle]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Menu</Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity style={styles.menuRow} onPress={() => this.goto()}>
            <Image source={windowsIcon} style={styles.menuIcon} />
            <Text style={styles.menuText}>All Snaps</Text>
            <Image source={arrowRightIcon} style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuRow} onPress={() => this.goto('favorites')}>
            <Image source={starIcon} style={styles.menuIcon} />
            <Text style={styles.menuText}>Favorites</Text>
            <Image source={arrowRightIcon} style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuRow} onPress={() => this.goto('image')}>
            <Image source={imageIcon} style={styles.menuIcon} />
            <Text style={styles.menuText}>Images</Text>
            <Image source={arrowRightIcon} style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuRow} onPress={() => this.goto('gif')}>
            <Image source={gifIcon} style={styles.menuIcon} />
            <Text style={styles.menuText}>GIFs</Text>
            <Image source={arrowRightIcon} style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuRow} onPress={() => this.goto('video')}>
            <Image source={videoIcon} style={styles.menuIcon} />
            <Text style={styles.menuText}>Videos</Text>
            <Image source={arrowRightIcon} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerHeader}>Upgrade</Text>
          <TouchableOpacity style={styles.upgradeRow}>
            <Image source={logoImage} style={styles.premiumIcon} />
            <Text style={[styles.menuText, styles.premiumText]}>PREMIUM</Text>
            <Image source={arrowRightBlueIcon} style={styles.arrowBlue} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuRow}>
            <Text style={styles.menuText}>Settings</Text>
            <Image source={arrowRightIcon} style={[styles.arrow, styles.arrowFooter]} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuRow} onPress={() => logoutUser()}>
            <Text style={styles.menuText}>Log out</Text>
            <Image source={arrowRightIcon} style={[styles.arrow, styles.arrowFooter]} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const window = Dimensions.get('window')

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#007EE5',
    padding: 25,
    paddingLeft: 10
  },
  header: {
    flex: 1,
    justifyContent: 'center'
  },
  body: {
    flex: 6,
    paddingLeft: 20,
    paddingTop: 30
  },
  footer: {
    flex: 3,
    paddingTop: 60
  },
  headerText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    letterSpacing: 3
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 190,
    height: 55
  },
  menuIcon: {
    width: 25,
    height: 25
  },
  menuText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 17,
    color: '#FFFFFF',
    letterSpacing: 3,
    textAlign: 'left',
    marginLeft: 20
  },
  premiumText: {
    color: '#007EE5',
    marginLeft: 20
  },
  arrow: {
    position: 'absolute',
    right: 0,
    marginTop: 4,
    width: 15,
    height: 15
  },
  footerHeader: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 17,
    color: '#FFFFFF',
    letterSpacing: 3
  },
  upgradeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    marginLeft: -20,
    marginTop: 20,
    backgroundColor: '#FFF'
  },
  premiumIcon: {
    marginLeft: 35,
    width: 40,
    height: 40
  },
  arrowBlue: {
    position: 'absolute',
    left: 212,
    marginTop: 4,
    width: 15,
    height: 15
  },
  arrowFooter: {
    right: -17
  }
})

export default Menu
