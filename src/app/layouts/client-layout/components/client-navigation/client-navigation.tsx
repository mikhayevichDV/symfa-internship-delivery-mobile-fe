import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as NotificationsIcon } from 'assets/images/icons/bell.svg';
import { ReactComponent as FavoriteIcon } from 'assets/images/icons/book.svg';
import { ReactComponent as HomeIcon } from 'assets/images/icons/home.svg';
import { ReactComponent as ProfileIcon } from 'assets/images/icons/profile.svg';
import { ReactComponent as OrderIcon } from 'assets/images/icons/shopping_bag.svg';

import './style.scss';

export const ClientNavigation: React.FC = () => {
  return (
    <div className="navigation">
      <nav className="navigation-bar">
        <div className="navigation-bar-cart">
          <div className="navigation-bar-cart-wrapper">
            <NavLink to="order">
              <OrderIcon
                style={{
                  height: '4vh',
                  width: ' 4vh',
                }}
              />
            </NavLink>
          </div>
        </div>
        <div className="navigation-bar-list">
          <NavLink to="home">
            <div className="navigation-bar-list-svg active-svg">
              <HomeIcon />
            </div>
          </NavLink>
          <NavLink to="favorite">
            <FavoriteIcon />
          </NavLink>
          <span className="navigation-bar-list-empty_slot" />
          <NavLink to="notifications">
            <NotificationsIcon />
          </NavLink>
          <NavLink to="profile/payment">
            <ProfileIcon />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
