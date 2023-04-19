import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const orderApi = createApi({
  reducerPath: 'order',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getOrder: builder.query({
      query: params => ({
        url: `order/get/${params}`,
        params,
      }),
    }),
    getTotal: builder.query({
      query: params => ({
        url: `order/total/get/${params}`,
        params,
      }),
    }),
    addToOrder: builder.mutation({
      query({ id, data }) {
        return {
          url: `order/add/${id}`,
          method: 'POST',
          body: data,
        };
      },
    }),
    incrementCount: builder.mutation({
      query({ id, data }) {
        return {
          url: `order/increment/${id}`,
          method: 'PATCH',
          body: data,
        };
      },
    }),
    decrementCount: builder.mutation({
      query({ id, data }) {
        return {
          url: `order/decrement/${id}`,
          method: 'PATCH',
          body: data,
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
