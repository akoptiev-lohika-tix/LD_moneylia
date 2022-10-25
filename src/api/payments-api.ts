import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { BASE_URL } from '../constants';
import { serverPaymentsDataTransformer } from '../helpers';
import { Payment } from '../interfaces';

export const fetchPayments = createAsyncThunk('user/fetchPayments', async (id: string) => {
  const response = await axios.get(`${BASE_URL}/${id}/payments.json`);

  return serverPaymentsDataTransformer(response.data);
});

export const fetchPaymentById = async (userId: string, paymentId: string): Promise<Payment> => {
  const response = await axios.get(`${BASE_URL}/${userId}/payments/${paymentId}.json`);

  try {
    return response.data;
  } catch (e: any) {
    throw new Error(e);
  }
};
