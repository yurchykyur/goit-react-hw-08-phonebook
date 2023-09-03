import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const register = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    try {
      console.log(credential);
      const resp = await axios.post('/users/signup', credential);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credential, thunkAPI) => {
  try {
    console.log(credential);
    const resp = await axios.post('/users/login', credential);
    setAuthHeader(resp.data.token);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;

  console.log(token);
  if (!token) return thunkAPI.rejectWithValue('No valid token');

  console.log('if (!token) return;');
  setAuthHeader(token);
  try {
    const resp = await axios.get('/users/current');
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { register, logIn, logOut, refreshUser };
