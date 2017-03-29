import { createSelector } from 'reselect'

export const all = state => state.Attachment.byId
export const byId = (state, id) => state.Attachment.byId.get(id + '')
export const menuOpen = state => state.Attachment.meta.get('menuOpen')

export const list = createSelector(
  [all],
  (attachments) => {
    return attachments.toList()
      .sortBy(attch => attch.created_at)
      .reverse()
  }
)
