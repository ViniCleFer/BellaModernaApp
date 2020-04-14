import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '~/store';

import Index from './src';

YellowBox.ignoreWarnings(['']);

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StatusBar barStyle="light-content" />
      <Index />
    </PersistGate>
  </Provider>
);
