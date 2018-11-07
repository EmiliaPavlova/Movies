import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ErrorBoundary from './js/components/ErrorBoundary/ErrorBoundary';
import moviesApp from './js/state/reducers';
import App from './App';

const store = createStore(moviesApp)

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
