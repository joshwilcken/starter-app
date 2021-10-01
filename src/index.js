import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import ErrorBoundary from './services/ErrorBoundary';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ErrorBoundary>
    <HashRouter>
      <Route component={App} />
    </HashRouter>
  </ErrorBoundary>,
  document.getElementById('root')
);
