import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

// import slide
import home from './page/home/state';
import app from './app_state/login';
// REDUX
const rootReducer = combineReducers({
  home,
  app
})


const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

// CONFIGURE STORE
const storeConfig = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default storeConfig;