import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import './style.scss';

export const OrderLayout: FC = () => {
  return (
    <div className="order-layout">
      <Outlet />
    </div>
  );
};
