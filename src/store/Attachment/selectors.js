import { createSelector } from 'reselect'

export const all = state => state.Attachment.byId

export const list = createSelector(
  [all],
  (attachments) => {
    return attachments.toList()
  }
)
