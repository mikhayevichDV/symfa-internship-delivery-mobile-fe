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
    getFavoriteProducts: builder.query({
      query: () => ({
        url: `favorite-products/get`,
      }),
    }),
    addFavoriteProduct: builder.mutation({
      query(data) {
        return {
          url: 'products/addFavoriteProduct',
          method: 'POST',
          body: data,
        };
      },
    }),
    getFavoriteProductsByFlavourType: builder.query({
      query: params => ({
        url: `avorite-products/get/flavourType/${params}`,
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
  useGetFavoriteProductsQuery,
  useAddFavoriteProductMutation,
  useGetFavoriteProductsByFlavourTypeQuery,
} = productsApi;
