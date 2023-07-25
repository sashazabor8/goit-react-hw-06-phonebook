import { createAction } from '@reduxjs/toolkit';

const filterChange = createAction('filter/filterChange');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  filterChange,
};
