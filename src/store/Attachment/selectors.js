import { createSelector } from 'reselect'
import { tranformType } from 'app/store/Attachment/helpers'

export const all = state => state.Attachment.byId
export const byId = (state, id) => state.Attachment.byId.get(id + '')
export const menuOpen = state => state.Attachment.meta.get('menuOpen')
export const attachmentFilter = (state, filter) => tranformType(filter)

export const list = createSelector(
  [all, attachmentFilter],
  (attachments, filter) => {
    return attachments.toList()
      .filter(attch => !filter || attch.type === filter)
      .sortBy(attch => attch.created_at)
      .reverse()
  }
)

export const favorites = createSelector(
  [all],
  (attachments) => {
    return attachments.toList()
      .filter(attch => attch.featured)
      .sortBy(attch => attch.created_at)
      .reverse()
  }
)
