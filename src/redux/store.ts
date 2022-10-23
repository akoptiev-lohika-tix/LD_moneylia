import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user-slice';
import paymentsSlice from './slices/payments-slice';

const rootReducer = combineReducers({
  user: userSlice,
  payments: paymentsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
