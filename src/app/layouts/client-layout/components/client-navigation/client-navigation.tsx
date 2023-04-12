import React from 'react';
import NotificationsIcon from 'assets/images/icons/bell.svg';
import FavoriteIcon from 'assets/images/icons/book.svg';
import HomeIcon from 'assets/images/icons/home.svg';
import ProfileIcon from 'assets/images/icons/profile.svg';
import OrderIcon from 'assets/images/icons/shopping_bag.svg';
import { NavigationItem } from '@components/ui-kit/navigation-item';

import './style.scss';

export const ClientNavigation: React.FC = () => {
  return (
    <div className="navigation">
      <nav className="navigation-bar">
        <NavigationItem to="" img={HomeIcon} />
        <NavigationItem to="favorite" img={FavoriteIcon} />
        <NavigationItem to="order" img={OrderIcon} />
        <NavigationItem to="notifications" img={NotificationsIcon} />
        <NavigationItem to="profile" img={ProfileIcon} />
      </nav>
    </div>
  );
};
