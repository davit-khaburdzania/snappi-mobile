import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

class Root extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder='Name'
            placeholderTextColor='#8B999F'
            autoCapitalize='none'
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#8B999F'
            autoCapitalize='none'
          />
          <TextInput
            style={styles.input}
            placeholder='Cell Number'
            placeholderTextColor='#8B999F'
            autoCapitalize='none'
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#8B999F'
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder='Confirm Password'
            placeholderTextColor='#8B999F'
            secureTextEntry
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.haveAccountContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.haveAccountText}>Already have an account ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F6',
    padding: 30
  },
  formContainer: {
    flex: 4,
    justifyContent: 'center'
  },
  input: {
    alignSelf: 'stretch',
    height: 50,
    marginBottom: 10,
    paddingLeft: 20,
    backgroundColor: '#FFF',
    color: '#666'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: '#4E6BC8'
  },
  buttonText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    letterSpacing: 2,
    color: '#FFF'
  },
  haveAccountContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  haveAccountText: {
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'OpenSans-Semibold',
    letterSpacing: 1.5,
    color: '#888'
  }
})

export default Root
