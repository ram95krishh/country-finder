import {
  getCountriesBySearchTermAction,
  resetOptionsAction,
  getCurrentLocationAction,
} from './actions';

// eslint-disable-next-line max-len
const getCountriesBySearchTerm = dispatch => (payload) => {
  dispatch(resetOptionsAction());
  dispatch(getCountriesBySearchTermAction(payload));
};

const getCurrentLocationTrigger = dispatch => () => dispatch(getCurrentLocationAction());

const operations = {
  getCountriesBySearchTerm,
  getCurrentLocationTrigger,
};

export default operations;
