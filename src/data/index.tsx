import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import {categoriesApi} from './api/categories-api';
import {questionsApi} from './api/questions-api';
import {apiMiddlewares} from './api';
import {persistStore, persistReducer} from 'redux-persist';
import firstLaunchReducer from './slices/first-launch-slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  combineReducers,
  ConfigureStoreOptions,
  Reducer,
} from '@reduxjs/toolkit';

const persistFirstLaunchConfig = {
  key: 'firstLaunch',
  storage: AsyncStorage,
};

const rootReducer: Reducer = combineReducers({
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [questionsApi.reducerPath]: questionsApi.reducer,
  firstLaunch: persistReducer(persistFirstLaunchConfig, firstLaunchReducer),
});

const middleware = [...apiMiddlewares];

const options: ConfigureStoreOptions = {
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(middleware),
};

export const store = configureStore(options);

setupListeners(store.dispatch);

export const persistor = persistStore(store);
