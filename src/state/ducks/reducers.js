import { combineReducers } from 'redux-seamless-immutable';
import { reducers as search } from './search';

const rootReducer = combineReducers({
  search,
});

export default rootReducer;
