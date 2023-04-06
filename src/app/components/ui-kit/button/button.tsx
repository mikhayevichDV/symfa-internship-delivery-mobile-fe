import React, { FC } from 'react';

import './style.scss';

interface IMainButtonProps {
  label: string;
}

export const MainButton: FC<IMainButtonProps> = ({ label }) => {
  return (
    <button type="submit" className="main-button">
      {label}
    </button>
  );
};
