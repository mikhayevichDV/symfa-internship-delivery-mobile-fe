import React from 'react';

import './style.scss';

interface IMainButtonProps {
  label: string;
  type: string;
}

export const Button = ({ label, type }: IMainButtonProps) => {
  return <input type={type} className="btn" value={label} />;
};
