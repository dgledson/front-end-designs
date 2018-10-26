import { all } from 'redux-saga/effects';
import collections from './collections';

export default function* rootSaga() {
  yield all([
    ...collections
  ])
} 