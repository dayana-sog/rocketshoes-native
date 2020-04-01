import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/routes';

import './src/config/ReactotronConfig';

import store from './src/store/index';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
