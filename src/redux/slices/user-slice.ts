import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { TransformedUser } from '../../interfaces';
import { ERROR_GENERAL_MESSAGE } from '../../variables';
import { fetchUserById } from '../../api';

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

export default userSlice.reducer;
