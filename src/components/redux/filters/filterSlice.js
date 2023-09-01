import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    filterContact: (_, action) => action.payload,
  },
});

export const { filterContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
