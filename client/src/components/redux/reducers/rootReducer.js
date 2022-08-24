import { combineReducers } from 'redux';
import objectReducer from './objectReducer';

const rootReducer = combineReducers({
  object: objectReducer,
});

export default rootReducer;
