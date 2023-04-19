import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

interface INavigationItemProps {
  to: string;
  Img: typeof React.Component;
}

// TODO type
export const MenuNavigationItem: any = ({ Img, to }: INavigationItemProps) => {
  return (
    <NavLink to={to}>
      <Img style={{ width: '30px', height: '30px', fill: 'red' }} />
    </NavLink>
  );
};
