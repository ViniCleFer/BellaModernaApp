import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import Reducers from '~/store/Reducers';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userReducer'],
  },
  Reducers
);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
