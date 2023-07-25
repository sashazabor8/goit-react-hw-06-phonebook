import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
