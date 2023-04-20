import React from 'react';
import { guard } from '@core/utils/HOC';

import './style.scss';

const NotificationsComponent: any = () => {
  return <div>Notifications</div>;
};

export const Notifications = guard(NotificationsComponent);
