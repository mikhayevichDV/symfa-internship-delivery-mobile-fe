import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useGetCurrentUserQuery } from '@store/user';
import { ClientNavigation } from './components';

import './style.scss';

export const ClientLayout: React.FC = () => {
  const { isError } = useGetCurrentUserQuery(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate('/auth');
    }
  }, [isError]);

  return (
    <div className="client-layout">
      <div className="client-layout-content">
        <Outlet />
      </div>
      <ClientNavigation />
    </div>
  );
};
