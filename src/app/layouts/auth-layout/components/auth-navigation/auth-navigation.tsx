import React from 'react';
import Logo from 'assets/images/logo.jpg';
import { NavigationItem } from '@components/ui-kit/navigation-item';

import './style.scss';

export const AuthNavigation: any = () => {
  return (
    <div className="auth-header">
      <div>
        <img
          className="auth-header-logo"
          src={Logo}
          loading="lazy"
          alt="logo"
        />
      </div>
      <p className="auth-header-title">Corner food</p>
      <p className="auth-header-description">Delivery App</p>

      <nav className="auth-header-navbar">
        <NavigationItem to="" label="Login" />
        <NavigationItem to="register" label="Signup" />
      </nav>
    </div>
  );
};
