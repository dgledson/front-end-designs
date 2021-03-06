import { takeLatest, call, put } from 'redux-saga/effects';
import constants from '../actionTypes/collections';
import { get } from '../../api/behance';

function* getCollections(action) {
  console.log("me chamaram aqui na call")
  yield put({ type: constants.GET_COLLECTIONS_REQUEST});
  try {
    const data = yield call(get, 'collections', { q: action.query });
    yield put({ type: constants.GET_COLLECTIONS_SUCCESS, data });
  } catch (error) {
    yield put({ type: constants.GET_COLLECTIONS_FAIL, error });
  }
}

export default [takeLatest(constants.GET_COLLECTIONS, getCollections)];
