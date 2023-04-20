import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import './style.scss';

interface ITextInputProps {
  id: string;
  label: string;
  type: string;
  onChange: any;
  validation: UseFormRegisterReturn<'email' | 'username' | 'address'>;
}

export const TextInput = ({
  label,
  id,
  type,
  onChange,
  validation,
}: ITextInputProps) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        {...validation}
        onChange={onChange}
        className=""
        type={type}
        id={id}
      />
    </div>
  );
};
