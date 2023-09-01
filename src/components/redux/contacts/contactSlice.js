import { createSlice } from '@reduxjs/toolkit';

import { contactsInitialState } from './initialState';
import * as contactsOperations from './contactsOperations';
import { toastifyMessage } from 'service';

const handleRejected = (state, action) => {
  console.log(action.payload.message);

  toastifyMessage.toastError(
    `${action.payload.message}.Please try again later`
  );
  return {
    ...state,
    error: action.payload,
    isLoading: false,
  };
};

const handlePending = state => ({
  ...state,
  isLoading: true,
});

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(contactsOperations.fetchContacts.pending, handlePending);
    builder.addCase(
      contactsOperations.fetchContacts.fulfilled,
      (state, action) => ({
        ...state,
        items: [...action.payload],
        isLoading: false,
      })
    );
    builder.addCase(contactsOperations.fetchContacts.rejected, handleRejected);

    builder.addCase(
      contactsOperations.fetchDeleteContacts.pending,
      handlePending
    );
    builder.addCase(
      contactsOperations.fetchDeleteContacts.fulfilled,
      (state, action) => {
        toastifyMessage.toastSuccess('Contact deleted successfully');
        return { ...state, items: [...action.payload], isLoading: false };
      }
    );
    builder.addCase(
      contactsOperations.fetchDeleteContacts.rejected,
      handleRejected
    );

    builder.addCase(contactsOperations.fetchAddContacts.pending, handlePending);
    builder.addCase(
      contactsOperations.fetchAddContacts.fulfilled,
      (state, action) => {
        toastifyMessage.toastSuccess('Contact added successfully');
        return { ...state, items: [...action.payload], isLoading: false };
      }
    );
    builder.addCase(
      contactsOperations.fetchAddContacts.rejected,
      handleRejected
    );
  },
});

export const contactReducer = contactSlice.reducer;
