import React from 'react';
import { Outlet } from 'react-router-dom';
import { ClientNavigation } from './components';

import './style.scss';

export const ClientLayout: React.FC = () => {
  return (
    <div className="client-layout">
      <div className="client-layout-content">
        <Outlet />
      </div>
      <ClientNavigation />
    </div>
  );
};
