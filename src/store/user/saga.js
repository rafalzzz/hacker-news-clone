import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from '../../common/axios';

import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_STARTED,
} from './consts';

export function* fetchUser({ payload }) {
  try {
    const { name } = payload;
    const request = yield call(get, `user/${name}.json`);
    console.log(request);
    yield put({ type: FETCH_USER_SUCCESS, payload: request });
  } catch (e) {
    yield put({ type: FETCH_USER_FAILURE, message: e });
  }
}

export function* userSaga() {
  yield takeLatest(FETCH_USER_STARTED, fetchUser);
}