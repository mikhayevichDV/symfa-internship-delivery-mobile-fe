import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

interface INavigationItemProps {
  to: string;
  className: string;
  label?: string;
}

export const AuthNavigationItem = ({
  to,
  label,
  className,
}: INavigationItemProps) => {
  return (
    <NavLink className={className} to={to}>
      <p>{label}</p>
    </NavLink>
  );
};
