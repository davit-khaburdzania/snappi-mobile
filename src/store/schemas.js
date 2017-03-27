import { Schema } from 'normalizr-immutable'
import { User, Attachment } from 'app/store/records'

const schemas = {
  user: new Schema('users', User),
  attachment: new Schema('attachments', Attachment)
}

schemas.user.define({})
schemas.attachment.define({})

export default schemas
