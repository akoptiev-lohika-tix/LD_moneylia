import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Payment } from '../../interfaces';
import { ERROR_GENERAL_MESSAGE } from '../../variables';
import { fetchPayments } from '../../api';

interface PaymentsState {
  payments: Payment[] | null;
  loadingPayments: boolean;
  errorPayments: string | null;
}

const initialState: PaymentsState = {
  payments: null,
  loadingPayments: false,
  errorPayments: null,
};

export const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPayments.pending, (state) => {
      state.loadingPayments = true;
    });
    builder.addCase(fetchPayments.fulfilled, (state, action: PayloadAction<Payment[]>) => {
      state.loadingPayments = false;
      state.payments = action.payload;
      state.errorPayments = null;
    });
    builder.addCase(fetchPayments.rejected, (state) => {
      state.loadingPayments = false;
      state.payments = null;
      state.errorPayments = ERROR_GENERAL_MESSAGE;
    });
  },
});

export default paymentsSlice.reducer;
