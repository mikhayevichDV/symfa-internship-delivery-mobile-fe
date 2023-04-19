import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

interface INavigationItemProps {
  to: string;
  label?: string;
}

// TODO type
export const AuthNavigationItem: any = ({
  to,
  label,
}: INavigationItemProps) => {
  return (
    <NavLink to={to}>
      <p>{label}</p>
    </NavLink>
  );
};
