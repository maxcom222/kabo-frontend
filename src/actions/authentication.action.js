import { userConstants } from '../constants'

const login = (user) => (
  { type: userConstants.LOGIN_REQUEST, payload: user }
)

const logout = () => (
  { type: userConstants.LOGOUT }
)

export const authenticationActions = {
  login,
  logout,
}
