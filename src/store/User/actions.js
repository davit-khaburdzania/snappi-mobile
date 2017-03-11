import request from 'axios'
import { setToken, unsetToken, reduceUsers } from './helpers'
import api from 'app/store/api'

export const setCurrentUser = user => {
  setToken(user.auth_token, user.uid, user.client)
  return { type: 'SET_CURRENT_USER', id: user.id }
}

export const logoutUser = () => {
  unsetToken()
  return { type: 'RESET_STATE' }
}

export const signUpUser = payload => async dispatch => {
  let response = await request.post(api.signup(), payload)
  let userData = response.data.data
  let authData = {
    id: userData.id,
    token: response.headers['access-token'],
    uid: response.headers['uid'],
    client: response.headers['client']
  }

  reduceUsers([userData], dispatch)
  dispatch(setCurrentUser(authData))
}

export const updateUser = (id, payload) => async dispatch => {
  let { data } = await request.put(api.user(id), { user: payload })

  reduceUsers([data], dispatch)
}

export const loginUser = payload => async dispatch => {
  let { data } = await request.post(api.login(), payload)

  reduceUsers([data], dispatch)
  dispatch(setCurrentUser(data))
}

export const validateToken = () => async dispatch => {
  let response = await request.get(api.validateToken())
  let userData = response.data.data
  let authData = {
    id: userData.id,
    auth_token: response.headers['access-token'],
    uid: response.headers['uid'],
    client: response.headers['client']
  }
  console.log(userData, authData)

  reduceUsers([userData], dispatch)
  dispatch(setCurrentUser(authData))
}

export const updateUserInStore = (id, data) => {
  return { type: 'UPDATE_USER', id, data }
}
