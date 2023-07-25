import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const initialState = localStorage.getItem('test')
  ? JSON.parse(localStorage.getItem('test'))
  : [];

const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(actions.addContact, (state, { payload }) => [...state, payload])
    .addCase(actions.deleteContact, (state, { payload }) =>
      state.filter(({ id }) => id !== payload)
    )
    .addDefaultCase(state => state);
});

export default contactsReducer;
