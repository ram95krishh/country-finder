import {
  SET_ALL_COUNTRIES,
  SET_OPTIONS,
  RESET_OPTIONS,
  SET_CURRENT_LOCATION,
} from './types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ALL_COUNTRIES: {
      return {
        ...state,
        allCountries: action.payload,
      };
    }

    case SET_OPTIONS: {
      return {
        ...state,
        options: action.payload,
      };
    }

    case RESET_OPTIONS: {
      return {
        ...state,
        options: [],
      };
    }

    case SET_CURRENT_LOCATION: {
      return {
        ...state,
        currentLocation: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
