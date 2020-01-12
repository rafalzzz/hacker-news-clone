import { all } from 'redux-saga/effects';
import { postsSaga } from './posts/saga';

export function* rootSaga(services = {}) {
  yield all([postsSaga()]);
}
