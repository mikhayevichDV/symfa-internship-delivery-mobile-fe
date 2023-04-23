import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getProducts: builder.query({
      query: params => ({
        url: 'products/all',
        params,
      }),
    }),
    getTypes: builder.query({
      query: () => {
        return {
          url: `products/types`,
          method: 'GET',
        };
      },
    }),
    getFlavourTypes: builder.query({
      query: () => {
        return {
          url: `products/flavourTypes`,
          method: 'GET',
        };
      },
    }),
    getFavoriteProducts: builder.query({
      query: params => ({
        url: `favorite-products/get`,
        params,
      }),
    }),
    addFavoriteProduct: builder.mutation({
      query({ data }) {
        return {
          url: 'favorite-products/add',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetTypesQuery,
  useGetFlavourTypesQuery,
  useGetFavoriteProductsQuery,
  useAddFavoriteProductMutation,
} = productsApi;
