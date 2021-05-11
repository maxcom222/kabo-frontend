import { takeLatest, call, put } from 'redux-saga/effects';

import { userService } from '../services';
import { userConstants, otherConstants } from '../constants';

function* getAccountDataSaga() {
  try {
    const payload = yield call(userService.getAccountData);
    yield put({ type: userConstants.ACCOUNT_DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: otherConstants.REQUEST_ERROR, payload: e });
  }
}

function* getSubscriptionDataSaga() {
  try {
    const payload = yield call(userService.getSubscriptionData);
    yield put({ type: userConstants.SUBSCRIPTION_DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: otherConstants.REQUEST_ERROR, payload: e });
  }
}

function* getRecipeDataSaga() {
  try {
    const payload = yield call(userService.getRecipeData);
    yield put({ type: userConstants.RECIPE_DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: otherConstants.REQUEST_ERROR, payload: e });
  }
}

function* cancelSubscriptionSaga() {
  try {
    const payload = yield call(userService.cancelSubscription);
    yield put({ type: userConstants.CANCEL_SUBSCRIPTION_REQUESTED, payload });
  } catch (e) {
    yield put({ type: otherConstants.REQUEST_ERROR, payload: e });
  }
}

function* pauseSubscriptionSaga(action) {
  try {
    const payload = yield call(userService.pauseSubscription, action.payload);
    yield put({ type: userConstants.PAUSE_SUBSCRIPTION_SUCCESS, payload });
  } catch (e) {
    yield put({ type: otherConstants.REQUEST_ERROR, payload: e });
  }
}

export default function* user() {
  yield takeLatest(userConstants.ACCOUNT_DATA_REQUESTED, getAccountDataSaga);
  yield takeLatest(userConstants.RECIPE_DATA_REQUESTED, getRecipeDataSaga);
  yield takeLatest(
    userConstants.SUBSCRIPTION_DATA_REQUESTED,
    getSubscriptionDataSaga
  );
  yield takeLatest(
    userConstants.CANCEL_SUBSCRIPTION_REQUESTED,
    cancelSubscriptionSaga
  );
  yield takeLatest(
    userConstants.PAUSE_SUBSCRIPTION_REQUESTED,
    pauseSubscriptionSaga
  );
}
