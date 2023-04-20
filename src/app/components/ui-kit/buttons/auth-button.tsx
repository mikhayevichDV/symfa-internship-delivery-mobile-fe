import React from 'react';

import './style.scss';

interface IMainButtonProps {
  label: string;
  type: string;
  submit?: any;
}

export const AuthButton = ({ label, type, submit }: IMainButtonProps) => {
  return (
    <input onClick={() => submit} type={type} className="btn" value={label} />
  );
};
