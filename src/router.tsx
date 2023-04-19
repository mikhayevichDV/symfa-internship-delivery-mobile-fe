import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '@layouts/auth-layout';
import { ClientLayout } from '@layouts/client-layout';
import { Login, RecoverPassword, Register } from '@pages/auth/components';
import {
  Favorite,
  FoodDetail,
  Home,
  Notifications,
  Order,
  Profile,
} from '@pages/menu/components';

export const router = createBrowserRouter([
  {
    path: '/client',
    element: <ClientLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'favorite', element: <Favorite /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'profile', element: <Profile /> },
      { path: 'order', element: <Order /> },
      { path: 'food-detail/:title', element: <FoodDetail /> },
      { path: 'favorite/food-detail/:title', element: <FoodDetail /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'recover', element: <RecoverPassword /> },
    ],
  },
]);
