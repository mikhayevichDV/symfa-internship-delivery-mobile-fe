import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { IUserResponse } from './models/user.interface';
import { authApi } from './auth-api';

const initialState: IUserResponse = {
  user: null,
  token: '',
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: () => initialState,
  },

  extraReducers: builder => {
    builder
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, { payload: { token } }) => {
          state.token = token;
        },
      )
      .addMatcher(
        authApi.endpoints.getCurrentUser.matchFulfilled,
        (state, { payload: { user } }) => {
          state.user = user;
        },
      );
  },
});
export const selectAuth = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;

export const { logout } = userSlice.actions;
