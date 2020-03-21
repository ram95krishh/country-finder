import { all } from 'redux-saga/effects';
import { combinedSaga as searchSagas } from './search/sagas';

export default function* rootSaga() {
  yield all([
    searchSagas(),
  ]);
}
