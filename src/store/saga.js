import { fork } from 'redux-saga/effects';
import { postsSaga } from './posts/saga';
import { commentsSaga } from './comments/saga';

export function* rootSaga(services = {}) {
  yield fork(postsSaga);
  yield fork(commentsSaga);
}
