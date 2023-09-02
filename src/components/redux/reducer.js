import { combineReducers } from 'redux';

import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from './filters/filterSlice';
import { authReducer } from './auth/slice';

const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: authReducer,
});

export { reducer };
