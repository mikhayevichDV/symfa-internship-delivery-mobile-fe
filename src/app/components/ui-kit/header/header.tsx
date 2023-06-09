import React from 'react';
import { config } from '@core/config';
import { useAppSelector } from '@core/hooks';

import './style.scss';

interface IHeaderProps {
  title: string;
}

export const Header = ({ title }: IHeaderProps) => {
  const user = useAppSelector(state => state?.user?.user);

  return (
    <header className="header">
      <p className="header-title">Let`s eat {title}</p>
      <img
        className="header-img"
        src={`${config.API_URL}/${user?.avatar}`}
        alt="avatar"
        loading="lazy"
      />
    </header>
  );
};
