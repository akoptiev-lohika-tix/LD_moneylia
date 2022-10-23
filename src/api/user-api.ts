import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';
import { userIdTransformer } from '../helpers';

export const fetchUserById = createAsyncThunk('user/fetchUserById', async (id: string) => {
  const response = await axios.get(`${BASE_URL}/${id}.json`);

  return {
    id: userIdTransformer(id),
    ...response.data,
  };
});
