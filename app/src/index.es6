import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'src/components/smart/App';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const configureStore = (initialState)=>{
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