import request from 'axios'
import { setToken, unsetToken, reduceUsers } from './helpers'
import api from 'app/store/api'

export const setCurrentUser = user => {
  setToken(user.auth_token)
  return { type: 'SET_CURRENT_USER', id: user.id }
}

export const logoutUser = () => {
  unsetToken()
  return { type: 'RESET_STATE' }
}

export const signUpUser = payload => async dispatch => {
  let { data } = await request.post(api.users(), { user: payload })

  reduceUsers([data], dispatch)
  dispatch(setCurrentUser(data))
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

export const getMe = () => async dispatch => {
  const { data } = await request.get(api.me())

  reduceUsers([data], dispatch)
  dispatch(setCurrentUser(data))
}

export const updateUserInStore = (id, data) => {
  return { type: 'UPDATE_USER', id, data }
}
