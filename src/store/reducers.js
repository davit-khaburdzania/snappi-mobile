import { combineReducers } from 'redux'
import AppNavigator from 'app/routes'

import Alert from './Alert/reducers'
import User from './User/reducers'
import Attachment from './Attachment/reducers'

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state)

  return newState || state
}

const appReducer = combineReducers({
  nav: navReducer,
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
