import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthNavigation } from '@layouts/auth-layout/components/auth-navigation';

import './style.scss';

export const AuthLayout: React.FC = () => {
  return (
    <div className="auth-layout">
      <AuthNavigation />
      <Outlet />
    </div>
  );
};
