import React from 'react';
import Logo from 'assets/images/logo.jpg';
import { AuthNavigationItem } from '@components/ui-kit';

import './style.scss';

export const AuthNavigation = () => {
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
        <AuthNavigationItem
          className="auth-header-navbar-item"
          to=""
          label="Login"
        />
        <AuthNavigationItem
          className="auth-header-navbar-item"
          to="register"
          label="Signup"
        />
      </nav>
    </div>
  );
};
