import {
  GET_COUNTRIES_BY_SEARCH_TERM_SAGA,
  RESET_OPTIONS,
  GET_CURRENT_LOCATION_SAGA,
} from './types';

const getCountriesBySearchTermAction = payload => ({
  type: GET_COUNTRIES_BY_SEARCH_TERM_SAGA,
  payload,
});

const getCurrentLocationAction = () => ({
  type: GET_CURRENT_LOCATION_SAGA,
});

const resetOptionsAction = () => ({
  type: RESET_OPTIONS,
});

export {
  getCountriesBySearchTermAction,
  resetOptionsAction,
  getCurrentLocationAction,
};
