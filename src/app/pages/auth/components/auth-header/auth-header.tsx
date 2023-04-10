import React from 'react';
import Logo from 'assets/images/logo.jpg';

import './style.scss';

// TODO type
export const AuthHeader = ({ isActive, setActive }: any) => {
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

      <div className="auth-header-buttons">
        <button
          className={isActive ? 'isActive' : ''}
          onClick={setActive}
          type="button"
        >
          Login
        </button>
        <button
          className={isActive ? '' : 'isActive'}
          onClick={setActive}
          type="button"
        >
          Signup
        </button>
      </div>
    </div>
  );
};
