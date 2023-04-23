import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const orderApi = createApi({
  reducerPath: 'order',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getOrder: builder.query({
      query: () => ({
        url: `order/get`,
      }),
    }),
    getTotal: builder.query({
      query: () => ({
        url: `order/total/get`,
      }),
    }),
    addToOrder: builder.mutation({
      query({ data }) {
        return {
          url: `order/add`,
          method: 'POST',
          body: data,
        };
      },
    }),
    incrementCount: builder.mutation({
      query({ id }) {
        return {
          url: `order/increment/${id}`,
          method: 'PATCH',
        };
      },
    }),
    decrementCount: builder.mutation({
      query({ id }) {
        return {
          url: `order/decrement/${id}`,
          method: 'PATCH',
        };
      },
    }),
  }),
});

export const {
  useGetOrderQuery,
  useGetTotalQuery,
  useAddToOrderMutation,
  useIncrementCountMutation,
  useDecrementCountMutation,
} = orderApi;
