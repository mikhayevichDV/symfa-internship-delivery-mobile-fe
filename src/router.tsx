import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '@layouts/auth-layout';
import { ClientLayout } from '@layouts/client-layout';
import { OrderLayout } from '@layouts/order-layout';
import { Login, RecoverPassword, Register } from '@pages/auth/components';
import {
  Account,
  Favorite,
  FoodDetail,
  History,
  Home,
  Notifications,
  Order,
  Payment,
  Profile,
} from '@pages/menu/components';

const props = {
  canActivate: (user: any) => !!user,
  redirect: '/auth',
};

export const router = createBrowserRouter([
  {
    path: '/client',
    element: <ClientLayout />,
    children: [
      { index: true, path: 'home', element: <Home {...props} /> },
      { path: 'favorite', element: <Favorite {...props} /> },
      { path: 'notifications', element: <Notifications {...props} /> },
      {
        path: 'profile',
        element: <Profile {...props} />,
        children: [
          { path: 'account', element: <Account /> },
          { index: true, path: 'payment', element: <Payment /> },
          { path: 'history', element: <History /> },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { index: true, path: '/auth', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'recover', element: <RecoverPassword /> },
    ],
  },
  {
    path: 'client',
    element: <OrderLayout />,
    children: [
      { index: true, path: 'order', element: <Order {...props} /> },
      { path: 'home/food-detail/:title', element: <FoodDetail {...props} /> },
      {
        path: 'favorite/food-detail/:title',
        element: <FoodDetail {...props} />,
      },
    ],
  },
]);
