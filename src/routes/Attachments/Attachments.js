import React, { Component } from 'react'
import { View, StyleSheet, ListView } from 'react-native'
import { Attachment as AttachmentRecord } from 'app/store/records'
import Attachment from './Attachment'

class Attachments extends Component {
  constructor (props) {
    super(props)

    let attachments = this.props.attachments
    let dataSource = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => {
        return !new AttachmentRecord(oldRow).equals(new AttachmentRecord(newRow))
      }
    })

    if (attachments && attachments.size > 0) {
      dataSource = dataSource.cloneWithRows(attachments.toJS())
    }

    this.state = { dataSource, active: false }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.attachments && !nextProps.attachments.equals(this.props.attachments)) {
      let data = nextProps.attachments.toJS()
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(data) })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={attachment => <Attachment attachment={new AttachmentRecord(attachment)} />}
        />
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  logoutContainer: {
    marginTop: 5
  },
  logoutText: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 14,
    color: '#333'
  }
})

export default Attachments
