import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import { store } from './store';
import { Posts } from './modules/posts';

export const App = () => (
  <Router>
    <Provider store={store}>
      <Posts />
    </Provider>
  </Router>
);