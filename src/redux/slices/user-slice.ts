import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';

import { TransformedUser } from '../../interfaces';
import { BASE_URL } from '../../constants';
import { userIdTransformer } from '../../helpers';
import { ERROR_GENERAL_MESSAGE } from '../../variables';

interface UserState {
  user: TransformedUser | null;
  loadingUser: boolean;
  errorUser: string | null;
}

const initialState: UserState = {
  user: null,
  loadingUser: false,
  errorUser: null,
};

export const fetchUserById = createAsyncThunk('user/fetchUserById', async (id: string) => {
  const response = await axios.get(`${BASE_URL}/${id}.json`);

  return {
    id: userIdTransformer(id),
    ...response.data,
  };
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state) => {
      state.loadingUser = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action: PayloadAction<TransformedUser>) => {
      state.loadingUser = false;
      state.user = action.payload;
      state.errorUser = null;
    });
    builder.addCase(fetchUserById.rejected, (state) => {
      state.loadingUser = false;
      state.user = null;
      state.errorUser = ERROR_GENERAL_MESSAGE;
    });
  },
});
