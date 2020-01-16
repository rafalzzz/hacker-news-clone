import { fork } from 'redux-saga/effects';
import { postsSaga } from './posts/saga';
import { commentsSaga } from './comments/saga';
import { userSaga } from './user/saga';

export function* rootSaga(services = {}) {
  yield fork(postsSaga);
  yield fork(commentsSaga);
  yield fork(userSaga)
}
