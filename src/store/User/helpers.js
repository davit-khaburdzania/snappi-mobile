import request from 'axios'
import { AsyncStorage } from 'react-native'
import { normalize, arrayOf } from 'normalizr-immutable'
import Schemas from 'app/store/schemas'

export const reduceUsers = (data, dispatch) => {
  let normalized = normalize(data, arrayOf(Schemas.user), {})
  let users = normalized.entities.users

  dispatch({ type: 'RECEIVE_USERS', users })
}

export const setToken = async (token, uid, client) => {
  request.defaults.headers.common['access-token'] = token
  request.defaults.headers.common['uid'] = uid
  request.defaults.headers.common['client'] = client

  try {
    await AsyncStorage.setItem('auth_token', token)
    await AsyncStorage.setItem('uid', uid)
    await AsyncStorage.setItem('client', client)
  } catch (error) {}
}

export const unsetToken = async () => {
  request.defaults.headers.common['access-token'] = null
  request.defaults.headers.common['uid'] = null
  request.defaults.headers.common['client'] = null

  try {
    await AsyncStorage.removeItem('auth_token')
    await AsyncStorage.removeItem('uid')
    await AsyncStorage.removeItem('client')
  } catch (error) {}
}
