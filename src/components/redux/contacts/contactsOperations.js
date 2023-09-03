import { createAsyncThunk } from '@reduxjs/toolkit';

import { contactsAPI } from 'service';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContscts',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await contactsAPI.fetchContacts();
      return resp.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  'contacts/fetchDeleteContacts',
  async (idContact, { rejectWithValue }) => {
    try {
      const resp = await contactsAPI.deleteContact(idContact);
      return resp.data.id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchAddContacts = createAsyncThunk(
  'contacts/fetchAddContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const resp = await contactsAPI.addContact(contact);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
