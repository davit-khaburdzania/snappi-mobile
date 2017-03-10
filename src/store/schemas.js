import { Schema } from 'normalizr-immutable'
import { User } from 'app/store/records'

const schemas = {
  user: new Schema('users', User)
}

schemas.user.define({})

export default schemas
