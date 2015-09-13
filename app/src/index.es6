import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'src/components/smart/App';

import * as actions from 'src/actions/actions';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

console.info(`Running in [${process.env.NODE_ENV}] environment.`)

const configureStore = (initialState)=>{
  actions.getBill()
  const store = createStoreWithMiddleware(
    (...args)=>args,
    initialState
  )
  return store;
}

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
);