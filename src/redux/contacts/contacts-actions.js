import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact');

const deleteContact = createAction('contacts/deleteContact');

export default {
  addContact,
  deleteContact,
};
