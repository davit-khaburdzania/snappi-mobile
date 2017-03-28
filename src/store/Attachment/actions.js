import request from 'axios'
import { Map } from 'immutable'
import { reduceAttachments } from './helpers'
import api from 'app/store/api'

export const getAttachments = () => async dispatch => {
  const { data } = await request.get(api.attachments())
  const attachments = data.attachments.map(attch => ({...attch, base_url: data.meta.base_url}))

  reduceAttachments(attachments, dispatch)
  dispatch({ type: 'RECEIVE_ATTACHMENT_METADATA', meta: Map(data.meta) })
}

export const removeAttachment = id => async dispatch => {
  await request.delete(api.attachment(id))

  dispatch({ type: 'REMOVE_ATTACHMENT', id })
}
