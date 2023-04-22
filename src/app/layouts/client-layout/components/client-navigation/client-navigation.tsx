import React from 'react';
import { ReactComponent as NotificationsIcon } from 'assets/images/icons/bell.svg';
import { ReactComponent as FavoriteIcon } from 'assets/images/icons/book.svg';
import { ReactComponent as HomeIcon } from 'assets/images/icons/home.svg';
import { ReactComponent as ProfileIcon } from 'assets/images/icons/profile.svg';
import { ReactComponent as OrderIcon } from 'assets/images/icons/shopping_bag.svg';
import { MenuNavigationItem } from '@components/ui-kit/navigation-item';

import './style.scss';

export const ClientNavigation: React.FC = () => {
  return (
    <div className="navigation">
      <nav className="navigation-bar">
        <MenuNavigationItem to="home" Img={HomeIcon} />
        <MenuNavigationItem to="favorite" Img={FavoriteIcon} />
        <MenuNavigationItem to="order" Img={OrderIcon} />
        <MenuNavigationItem to="notifications" Img={NotificationsIcon} />
        <MenuNavigationItem to="profile/payment" Img={ProfileIcon} />
      </nav>
    </div>
  );
};
