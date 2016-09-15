import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

// const enhancer = compose(
//   applyMiddleware(thunk, promiseMiddleware())
// )

export default function configureStore() {
  const store = createStore (
    rootReducer,
    applyMiddleware(thunk, promiseMiddleware())
  );
  return store;
};




