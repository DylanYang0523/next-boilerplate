import { fork } from 'redux-saga/effects';
import { watchGetCommentStart } from './comment';

export default function* rootSaga() {
  yield fork(watchGetCommentStart);
}