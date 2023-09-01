import { createAsyncThunk } from '@reduxjs/toolkit';

import { contactsAPI } from 'service';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContscts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  'contacts/fetchDeleteContacts',
  async (idContact, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteContact(idContact);
      const contactsAfterDelete = await contactsAPI.fetchContacts();
      return contactsAfterDelete;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchAddContacts = createAsyncThunk(
  'contacts/fetchAddContacts',
  async (contact, { rejectWithValue }) => {
    try {
      await contactsAPI.addContact(contact);
      const contactsAfterAdd = await contactsAPI.fetchContacts();
      return contactsAfterAdd;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
