import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const promoCodesApi = createApi({
  reducerPath: 'promocodes',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getPromocodes: builder.query({
      query: () => {
        return {
          url: 'promo-codes/all',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetPromocodesQuery } = promoCodesApi;
