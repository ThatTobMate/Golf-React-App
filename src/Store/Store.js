import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk)
)

export default function configureStore() {
  const store = createStore (
    rootReducer,
    enhancer
  );
  return store;
};




