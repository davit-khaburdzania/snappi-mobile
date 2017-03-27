import { Record } from 'immutable'

const AttachmentRecord = Record({
  id: null,
  filename: null,
  content_type: null,
  type: null,
  name: null,
  featured: false,
  token: null,
  extension: null,
  base_url: null,
  created_at: null
})

export default class Attachment extends AttachmentRecord {
  url (version) {
    version = version || 'normal'

    const type = this.attachmentType()
    const suffix = this.getSuffix(version)

    return `${this.base_url}/uploads/${type}/file/${this.id}/${suffix}${this.filename}${this.extension}`
  }

  attachmentType () {
    switch (this.type) {
      case 'gif_image':
      case 'image':
        return 'image'
      case 'video':
        return 'video'
    }
  }

  getSuffix (version) {
    let suffix = ''

    switch (this.type) {
      case 'gif_image':
      case 'image':
        switch (version) {
          case 'normal':
            suffix = ''
            break
          case 'thumb':
            suffix = 'normal_thumb_'
            break
          default:
            suffix = ''
        }
        break
      case 'video':
        switch (version) {
          case 'normal':
            suffix = 'normal_video_'
            break
          case 'thumb':
            suffix = 'thumb_video_'
            break
          default:
            suffix = ''
        }
        break
      default:
        suffix = ''
    }

    return suffix
  }
}
