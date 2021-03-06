import { Map } from 'immutable'
import { combineReducers } from 'redux'

export default combineReducers({
  byId: attachmentsReducer,
  meta: metaReducer
})

function attachmentsReducer (state = Map(), action) {
  switch (action.type) {
    case 'RECEIVE_ATTACHMENT':
      return state.set(action.attachment.id, action.attachment)

    case 'RECEIVE_ATTACHMENTS':
      return state.merge(action.attachments)

    case 'UPDATE_ATTACHMENT':
      return state.mergeIn([action.id], action.data)

    case 'REMOVE_ATTACHMENT':
      return state.delete(action.id)

    default:
      return state
  }
}

function metaReducer (state = Map({ menuOpen: false }), action) {
  switch (action.type) {
    case 'RECEIVE_ATTACHMENT_METADATA':
      return state.merge(action.meta)

    case 'TOGGLE_MENU_OPEN':
      return state.set('menuOpen', !state.menuOpen)

    case 'SET_MENU':
      return state.set('menuOpen', action.isOpen)

    default:
      return state
  }
}
