import 'es6-promise';
import fetch from 'isomorphic-fetch';
import { takeEvery, put } from 'redux-saga/effects';
import { 
  getCommentSuccess,
  getCommentEnd,
} from '@actions/comment';

// Get Comment Saga
export function* workerGetCommentStart() {
  try {
    const json = yield fetch('https://jsonplaceholder.typicode.com/comments?postId=1').then(res => res.json());
    yield put(getCommentSuccess(json));
    yield put(getCommentEnd());
  } catch (err) {
    console.warn('omg, get comment fail: ', err);
    yield put(getCommentEnd());
  }
}
export function* watchGetCommentStart() {
  yield takeEvery('GET_COMMENT_START', workerGetCommentStart);
}