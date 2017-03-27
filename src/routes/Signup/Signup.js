import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

class Root extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  onSubmit () {
    let state = this.state
    let payload = { ...this.state, uid: state.email }

    if (state.password !== state.password_confirmation) {
      return console.error('passwords dont match')
    }

    this.props.signUpUser(payload)
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder='Name'
            placeholderTextColor='#8B999F'
            autoCapitalize='none'
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#8B999F'
            autoCapitalize='none'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#8B999F'
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <TextInput
            style={styles.input}
            placeholder='Confirm Password'
            placeholderTextColor='#8B999F'
            secureTextEntry
            value={this.state.password_confirmation}
            onChangeText={confirmation => this.setState({ password_confirmation: confirmation })}
          />
          <TouchableOpacity style={styles.button} onPress={this.onSubmit.bind(this)}>
            <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
          <Text style={styles.terms}>
            By creating an account you agree  to the Terms of use
          </Text>
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
    backgroundColor: '#007EE5'
  },
  buttonText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    letterSpacing: 2,
    color: '#FFF'
  },
  terms: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 14,
    color: '#8B999F',
    letterSpacing: 1.5,
    paddingTop: 20,
    textAlign: 'center'
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
