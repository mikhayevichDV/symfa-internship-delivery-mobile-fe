import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { historyApi } from './history';
import { orderApi } from './order';
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
    [historyApi.reducerPath]: historyApi.reducer,
    user: persistedReducer,
    product: productsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    productsApi.middleware,
    orderApi.middleware,
    promoCodesApi.middleware,
    historyApi.middleware,
  ],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
