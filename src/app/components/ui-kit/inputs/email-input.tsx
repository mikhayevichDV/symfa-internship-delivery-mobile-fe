import React from 'react';

import './style.scss';

interface IEmailInputProps {
  id: string;
  label: string;
  type: string;
  onChange: any;
}

export const EmailInput = ({ label, id, type, onChange }: IEmailInputProps) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input onChange={onChange} className="" type={type} id={id} />
    </div>
  );
};
