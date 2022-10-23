import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { BASE_URL } from '../constants';
import { serverPaymentsDataTransformer } from '../helpers';

export const fetchPayments = createAsyncThunk('user/fetchPayments', async (id: string) => {
  const response = await axios.get(`${BASE_URL}/${id}/payments.json`);

  return serverPaymentsDataTransformer(response.data);
});
