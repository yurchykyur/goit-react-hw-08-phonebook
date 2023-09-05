import { createAsyncThunk } from '@reduxjs/toolkit';

import { contactsAPI } from 'service';
import { toastError, toastSuccess } from 'service/toastify';

const register = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    try {
      const resp = await contactsAPI.registerUser(credential);
      contactsAPI.setAuthHeader(resp.data.token);
      toastSuccess('You are successfully registered in the system');

      return resp.data;
    } catch (error) {
      toastError('Something went wrong, please try again');

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credential, thunkAPI) => {
  try {
    const resp = await contactsAPI.loginUser(credential);
    contactsAPI.setAuthHeader(resp.data.token);
    toastSuccess('You are successfully logged into the system');

    return resp.data;
  } catch (error) {
    toastError('Something went wrong, please try again');
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await contactsAPI.logoutUser();
    contactsAPI.clearAuthHeader();
    toastSuccess('Exit completed successfully');
  } catch (error) {
    toastError('Something went wrong, please try again');
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
    toastError('Something went wrong, please log in again');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { register, logIn, logOut, refreshUser };
