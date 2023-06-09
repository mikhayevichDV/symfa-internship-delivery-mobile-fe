import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const authApi = createApi({
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    createUser: builder.mutation({
      query(data) {
        return {
          url: `registration`,
          method: 'POST',
          body: data,
        };
      },
    }),
    updateUser: builder.mutation({
      query({ data }) {
        return {
          url: `auth/update`,
          method: 'PATCH',
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: `auth/user/login`,
          method: 'POST',
          body: data,
        };
      },
    }),
    recoverPassword: builder.mutation({
      query(data) {
        return {
          url: `auth/recover`,
          method: 'PATCH',
          body: data,
        };
      },
    }),
    getCurrentUser: builder.query({
      query: () => {
        return {
          url: `auth/profile`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useCreateUserMutation,
  useUpdateUserMutation,
  useLoginUserMutation,
  useRecoverPasswordMutation,
  useGetCurrentUserQuery,
} = authApi;
