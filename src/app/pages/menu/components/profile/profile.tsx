import React from 'react';
import { guard } from '@core/utils/HOC';

import './style.scss';

const ProfileComponent: React.FC = () => {
  return <div>Profile</div>;
};

export const Profile = guard(ProfileComponent);
