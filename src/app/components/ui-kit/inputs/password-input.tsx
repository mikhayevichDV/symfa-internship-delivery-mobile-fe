import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import ShowPasswordEye from 'assets/images/icons/show-password-eye.svg';
import HidePasswordEye from 'assets/images/icons/show-password-eye-closed.svg';

import './style.scss';

interface IPasswordInputProps {
  id: string;
  label: string;
  onChange?: any;
  validation: UseFormRegisterReturn<'password' | 'confirmPassword'>;
}

export const PasswordInput = ({
  label,
  id,
  onChange,
  validation,
}: IPasswordInputProps) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <div className="password_container">
        <input
          className="input-wrapper-password_field"
          {...validation}
          onChange={onChange}
          type={passwordShown ? 'text' : 'password'}
          id={id}
        />
        <button type="button" onClick={togglePassword}>
          {passwordShown ? (
            <img
              className="input-wrapper-eyes"
              src={HidePasswordEye}
              alt="show"
            />
          ) : (
            <img
              className="input-wrapper-eyes"
              src={ShowPasswordEye}
              alt="hide"
            />
          )}
        </button>
      </div>
    </div>
  );
};
