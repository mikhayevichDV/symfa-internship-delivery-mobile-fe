import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IProductsRequest,
  IProductsResponse,
} from '@store/models/products.interface';
import { RootState } from '@store/store';

const initialState: IProductsResponse = {
  products: null,
};

export const productsSlice = createSlice({
  initialState,
  name: 'products',
  reducers: {
    setProducts: (state, action: PayloadAction<IProductsRequest>) => {
      state.products = action.payload;
    },
  },
});

export const selectProducts = (state: RootState) => state.product;

export const productsReducer = productsSlice.reducer;

export const { setProducts } = productsSlice.actions;
