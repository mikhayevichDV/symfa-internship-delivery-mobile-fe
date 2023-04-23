import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

interface INavigationItemProps {
  to: string;
  Img: any;
}

export const MenuNavigationItem = ({ Img, to }: INavigationItemProps) => {
  return (
    <NavLink className="nav-item-link" to={to}>
      <Img style={{ width: '30px', height: '30px' }} />
    </NavLink>
  );
};
