import { combineReducers } from 'redux'

import Alert from './Alert/reducers'
import User from './User/reducers'
import Attachment from './Attachment/reducers'

const appReducer = combineReducers({
  Alert,
  User,
  Attachment
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
