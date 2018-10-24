import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './js/components/ErrorBoundary/ErrorBoundary';
import App from './App';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
