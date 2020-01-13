import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from '../../common/axios';

import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_STARTED,
} from './consts';

export function* fetchComments({ payload }) {
  try {
    const { id } = payload;
    const request = yield call(get, `item/${id}.json`);
    console.log(request);
    yield put({ type: FETCH_COMMENTS_SUCCESS, payload: request });
  } catch (e) {
    yield put({ type: FETCH_COMMENTS_FAILURE, message: e });
  }
}

export function* commentsSaga() {
  yield takeLatest(FETCH_COMMENTS_STARTED, fetchComments);
}