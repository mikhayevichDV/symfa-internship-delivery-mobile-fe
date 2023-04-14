import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '@layouts/auth-layout';
import { ClientLayout } from '@layouts/client-layout';
import { Login, Register } from '@pages/auth/components';
import {
  Favorite,
  FoodDetail,
  Home,
  Notifications,
  Order,
  Profile,
} from '@pages/menu/components';
import { MainLayout } from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [],
  },
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
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);
