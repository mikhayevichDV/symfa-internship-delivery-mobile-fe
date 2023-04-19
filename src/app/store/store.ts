import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { orderApi } from '@store/order';
import { productsApi, productsReducer } from './products';
import { promoCodesApi } from './promo-codes';
import { authApi, userReducer } from './user';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [promoCodesApi.reducerPath]: promoCodesApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    user: persistedReducer,
    product: productsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    productsApi.middleware,
    orderApi.middleware,
    promoCodesApi.middleware,
  ],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
