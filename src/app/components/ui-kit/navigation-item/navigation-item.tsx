import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

interface INavigationItemProps {
  to: string;
  img?: string;
  label?: string;
}

// TODO type
export const NavigationItem: any = ({
  img,
  to,
  label,
}: INavigationItemProps) => {
  return (
    <NavLink to={to}>
      {img ? <img className="nav-img" src={img} alt="icon" /> : <p>{label}</p>}
    </NavLink>
  );
};
