import { configureStore } from '@reduxjs/toolkit';

import { reducer as rootReducer } from './reducer';

export const store = configureStore({ reducer: rootReducer });
