import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '@layouts/auth-layout';
import { ClientLayout } from '@layouts/client-layout';
import { Auth } from '@pages/auth';
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
    children: [],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [{ path: '', element: <Auth /> }],
  },
]);
