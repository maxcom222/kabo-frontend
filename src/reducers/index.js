import { combineReducers } from 'redux'

import { authentication } from './authentication.reducer'
import { alert } from './alert.reducer'
import { user } from './user.reducer'

const rootReducer = combineReducers({
  authentication,
  alert,
  user,
})

export default rootReducer
