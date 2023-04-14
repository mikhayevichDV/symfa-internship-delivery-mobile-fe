import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getProducts: builder.query({
      query: params => ({
        url: 'products/all',
        params,
      }),
    }),
    getProductByTitle: builder.query({
      query: params => ({
        url: `products/title/${params}`,
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
    getProductsByType: builder.query({
      query: params => ({
        url: `products/type/${params}`,
        params,
      }),
    }),
    getProductsByFlavourType: builder.query({
      query: params => ({
        url: `products/flavourType /${params}`,
        params,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByTitleQuery,
  useGetTypesQuery,
  useGetFlavourTypesQuery,
  useGetProductsByTypeQuery,
  useGetProductsByFlavourTypeQuery,
} = productsApi;
