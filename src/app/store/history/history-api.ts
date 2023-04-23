import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '@store/models';

export const historyApi = createApi({
  reducerPath: 'history',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    createHistory: builder.mutation({
      query(data) {
        return {
          url: `history/create`,
          method: 'POST',
          body: data,
        };
      },
    }),
    getHistory: builder.mutation({
      query: () => ({
        url: `history/get`,
      }),
    }),
  }),
});

export const { useCreateHistoryMutation, useGetHistoryMutation } = historyApi;
