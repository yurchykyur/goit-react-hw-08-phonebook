import { createAsyncThunk } from '@reduxjs/toolkit';

import { contactsAPI } from 'service';

const register = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    try {
      const resp = await contactsAPI.registerUser(credential);
      contactsAPI.setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credential, thunkAPI) => {
  try {
    const resp = await contactsAPI.loginUser(credential);
    contactsAPI.setAuthHeader(resp.data.token);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await contactsAPI.logoutUser();
    contactsAPI.clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;

  if (!token) return thunkAPI.rejectWithValue('No valid token');

  contactsAPI.setAuthHeader(token);
  try {
    const resp = await contactsAPI.refreshUser();
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { register, logIn, logOut, refreshUser };
