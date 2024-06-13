import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './RootReducer';

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
console.log(store.getState());
export default store;
