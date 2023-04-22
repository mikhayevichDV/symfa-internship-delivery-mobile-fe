import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import './style.scss';

interface ITextInputProps {
  id: string;
  label: string;
  type: string;
  value?: string;
  onChange: any;
  validation: UseFormRegisterReturn<'email' | 'username' | 'address'>;
}

export const TextInput = ({
  label,
  id,
  type,
  value,
  onChange,
  validation,
}: ITextInputProps) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        {...validation}
        value={value}
        onChange={onChange}
        type={type}
        id={id}
      />
    </div>
  );
};
