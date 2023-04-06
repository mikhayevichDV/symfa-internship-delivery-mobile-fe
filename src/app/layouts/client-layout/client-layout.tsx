import React from 'react';
import { Outlet } from 'react-router-dom';

import './style.scss';

export const ClientLayout: React.FC = () => {
  return (
    <div className="client-layout">
      <Outlet />
    </div>
  );
};
