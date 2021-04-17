import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const create = () => {
  const store = createStore(
    rootReducer(history),
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
  )
  sagaMiddleware.run(rootSaga);
  return store;
}

export default create;