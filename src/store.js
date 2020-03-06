import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';

export default function configureStore(sagaMiddleware, initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
}
