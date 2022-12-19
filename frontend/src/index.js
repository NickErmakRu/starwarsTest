import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/App';
import ErrorBoundry from './components/errorBoundry';
import BookstoreService from './services/bookstoreService';
import {BookstoreServiceProvider} from './components/bookStoreServiceContext';

import store from './redux-config/store';

import './index.css';
import reportWebVitals from './reportWebVitals';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();