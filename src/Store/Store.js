import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { routerMiddleware, push } from 'react-router-redux';
import { browserHistory } from 'react-router';

export default function configureStore() {
  const store = createStore (
    rootReducer,
    window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(thunk, promiseMiddleware(), routerMiddleware(browserHistory))
  );
  return store;
};




