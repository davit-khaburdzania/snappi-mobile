import { normalize, arrayOf } from 'normalizr-immutable'
import Schemas from 'app/store/schemas'

export const reduceAttachments = (data, dispatch) => {
  let normalized = normalize(data, arrayOf(Schemas.attachment), {})
  let attachments = normalized.entities.attachments

  dispatch({ type: 'RECEIVE_ATTACHMENTS', attachments })
}

export const tranformType = (type = 'all') => {
  const types = {
    all: null,
    image: 'image',
    gif: 'gif_image',
    video: 'video'
  }

  return types[type]
}
