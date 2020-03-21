import {
  takeEvery,
  select,
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { geoLocationUrl } from '../../../utils/constants';
import { callPost, callGet } from '../../../lib/Api';
import {
  GET_COUNTRIES_BY_SEARCH_TERM_SAGA,
  SET_OPTIONS,
  GET_CURRENT_LOCATION_SAGA,
  SET_CURRENT_LOCATION,
} from './types';
import selectors from './selectors';

// import notyNotification from '../../../lib/Noty';

function* getCountriesBySearchTerm({ payload = '' }) {
  const coordinates = yield select(selectors.getCurrentLocation);
  const body = {
    searchTerm: payload,
    coordinates,
  };
  const countries = yield call(callPost, 'api/search/getbyproximity', body);
  yield put({ type: SET_OPTIONS, payload: countries });
  yield all([]);
}

function* getCurrentLocation() {
  const location = yield call(callGet, geoLocationUrl);
  const currentLoc = [location.longitude, location.latitude];
  yield put({ type: SET_CURRENT_LOCATION, payload: currentLoc });
}

function* watchSearchCall() {
  yield takeEvery(GET_COUNTRIES_BY_SEARCH_TERM_SAGA, getCountriesBySearchTerm);
}

function* watchLocationCall() {
  yield takeLatest(GET_CURRENT_LOCATION_SAGA, getCurrentLocation);
}

// eslint-disable-next-line import/prefer-default-export
export function* combinedSaga() {
  yield all([
    watchSearchCall(),
    watchLocationCall(),
  ]);
}
