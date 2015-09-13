import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'src/reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

const configureStore = (initialState)=>
  createStoreWithMiddleware(
    rootReducer,
    initialState
  )

export default configureStore;