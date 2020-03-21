import { pathOr } from 'ramda';

const getOptions = state => pathOr([], ['search', 'options'], state);
const getCurrentLocation = state => pathOr([16.3738, 48.2082], ['search', 'currentLocation'], state);

const selectors = {
  getOptions,
  getCurrentLocation,
};

export default selectors;
