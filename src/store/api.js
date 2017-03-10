import { API_URL } from 'app/constants'

export default {
  login: () => `${API_URL}/login`,
  users: () => `${API_URL}/users`,
  user: id => `${API_URL}/users/${id}`
}
