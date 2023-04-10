import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import './style.scss';

interface ITextInputProps {
  id: string;
  label: string;
  type: string;
  onChange: any;
  rest: UseFormRegisterReturn<any>;
}

export const TextInput = ({
  label,
  id,
  type,
  onChange,
  ...rest
}: ITextInputProps) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input {...rest} onChange={onChange} className="" type={type} id={id} />
    </div>
  );
};
