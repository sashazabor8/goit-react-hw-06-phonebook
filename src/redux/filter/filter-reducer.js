import { createReducer } from '@reduxjs/toolkit';
import actions from './filter-actions';

const initialState = '';

const filterReducer = createReducer(initialState, builder => {
  builder
    .addCase(actions.filterChange, (state, { payload }) => (state = payload))
    .addDefaultCase(state => state);
});

export default filterReducer;
