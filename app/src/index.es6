import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'src/components/App';
import configureStore from 'src/store/configureStore';

console.info(`Running in [${process.env.NODE_ENV}] environment.`)

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
);