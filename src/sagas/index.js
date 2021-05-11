import { all } from 'redux-saga/effects'

import authentication from './authentication.saga'
import user from './user.saga'

export default function* rootSaga() {
  yield all([
    authentication(),
    user(),
  ])
}
