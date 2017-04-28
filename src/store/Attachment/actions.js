import request from 'axios'
import { Map } from 'immutable'
import { reduceAttachments } from './helpers'
import api from 'app/store/api'

export const getAttachments = (filter = '') => async dispatch => {
  const url = `${api.attachments()}?filter=${filter}`
  const { data } = await request.get(url)

  const attachments = data.attachments.map(attch => ({...attch, base_url: data.meta.base_url}))

  reduceAttachments(attachments, dispatch)
  dispatch({ type: 'RECEIVE_ATTACHMENT_METADATA', meta: Map(data.meta) })
}

// export const getFavorites = () => async dispatch => {
//   const url = `${api.attachments()}?filter=${filter}`
//   const { data } = await request.get(url)

//   const attachments = data.attachments.map(attch => ({...attch, base_url: data.meta.base_url}))

//   reduceAttachments(attachments, dispatch)
//   dispatch({ type: 'RECEIVE_ATTACHMENT_METADATA', meta: Map(data.meta) })
// }

export const removeAttachment = id => async dispatch => {
  await request.delete(api.attachment(id))

  dispatch({ type: 'REMOVE_ATTACHMENT', id })
}

export const updateAttachment = (id, payload) => async dispatch => {
  const { data } = await request.put(api.attachment(id), payload)

  reduceAttachments([data.attachment], dispatch)
}

export const toggleMenu = () => {
  return { type: 'TOGGLE_MENU_OPEN' }
}

export const setMenu = isOpen => {
  return { type: 'SET_MENU', isOpen }
}
