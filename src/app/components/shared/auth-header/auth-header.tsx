import React, { useState } from 'react';

import './style.scss';

export const AuthHeader = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="auth-header">
      <div>
        <img src="src/assets/images/logo.jpg" loading="lazy" alt="logo" />
      </div>
      <p className="auth-header-title">Corner food</p>
      <p className="auth-header-description">Delivery App</p>

      <div className="auth-header-buttons">
        <button
          className={isActive ? undefined : 'isActive'}
          onClick={() => toggleActive()}
          type="submit"
        >
          Login
        </button>
        <button
          className={isActive ? 'isActive' : undefined}
          onClick={() => toggleActive()}
          type="submit"
        >
          Signup
        </button>
      </div>
    </div>
  );
};
