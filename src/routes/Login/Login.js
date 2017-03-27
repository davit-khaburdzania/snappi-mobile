import React, { Component } from 'react'
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Alertable from 'app/components/Alert/Alert'
import logoImg from 'assets/img/logo.png'

class Root extends Component {
  state = {
    email: '',
    password: ''
  }

  onSubmit () {
    this.props.loginUser({ email: this.state.email, password: this.state.password })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.header]}>
          <Image source={logoImg} style={styles.logo} />
        </View>
        <View style={[styles.row, styles.loginContainer]}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#8B999F'
            autoCapitalize='none'
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#8B999F'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
          <TouchableOpacity style={styles.button} onPress={this.onSubmit.bind(this)}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.row, styles.noAccountContainer]}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.noAccountText}>Don’t have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F6'
  },
  row: {
    flex: 1
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  logo: {
    width: 150,
    height: 150
  },
  loginContainer: {
    padding: 30
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
  noAccountContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  noAccountText: {
    marginBottom: 40,
    fontSize: 16,
    fontFamily: 'OpenSans-Semibold',
    letterSpacing: 1.5,
    color: '#888'
  },
  forgotPassword: {
    paddingTop: 20,
    textAlign: 'center',
    fontFamily: 'OpenSans-Semibold',
    fontSize: 14,
    color: '#8B999F',
    letterSpacing: 1.75
  }
})

export default Alertable(Root)
