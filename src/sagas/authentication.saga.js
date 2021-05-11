import { takeLatest, call, put } from 'redux-saga/effects'

import { userConstants } from '../constants'
import { authenticationService } from '../services'

function* loginSaga(action) {
  try {
    const payload = yield call(authenticationService.login, action.payload)
    yield put({ type: userConstants.LOGIN_SUCCESS, payload })
  } catch (e) {
    yield put({ type: userConstants.LOGIN_FAILURE, payload: e })
  }
}

export default function* account() {
  yield takeLatest(userConstants.LOGIN_REQUEST, loginSaga)
}
