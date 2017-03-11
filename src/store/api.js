import { API_URL } from 'app/constants'

export default {
  signup: () => `${API_URL}/api/auth`,
  signin: () => `${API_URL}/api/auth/sign_in`,
  validateToken: () => `${API_URL}/api/auth/validate_token`,
  users: () => `${API_URL}/users`,
  user: id => `${API_URL}/users/${id}`
}
