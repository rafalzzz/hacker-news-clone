import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from '../../common/axios';

import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_STARTED,
} from './consts';

export function* fetchPosts({ payload }) {
  try {
    const { type, page } = payload;
    const request = yield call(get, `${type}/${page}.json`);
    console.log(request);
    yield put({ type: FETCH_POSTS_SUCCESS, payload: request });
  } catch (e) {
    yield put({ type: FETCH_POSTS_FAILURE, message: e });
  }
}

export function* postsSaga() {
  yield takeLatest(FETCH_POSTS_STARTED, fetchPosts);
}