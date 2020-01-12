import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import { store } from './store';
import { Posts } from './modules/posts';

export const App = () => (
  <Provider store={store}>
    <Posts />
  </Provider>
);