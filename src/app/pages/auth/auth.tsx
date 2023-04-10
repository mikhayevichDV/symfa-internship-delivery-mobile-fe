import React, { useState } from 'react';
import { AuthHeader } from '@pages/auth/components/auth-header';
import { Register } from '@pages/auth/components/register';
import { Login } from './components/login';

export const Auth: React.FC = () => {
  const [isActive, setActive] = useState<boolean>(true);

  const toggleActive = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <AuthHeader isActive={isActive} setActive={toggleActive} />
      {isActive ? <Login /> : <Register />}
    </div>
  );
};
