import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import shopping from './shopping';

const rootReducer = (history) =>
  combineReducers({
    shopping,
    router: connectRouter(history),
  });

export default rootReducer;