import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { config } from '@core/config';
import { guard } from '@core/utils/HOC';
import { useGetCurrentUserQuery } from '@store/user';

import './style.scss';

const ProfileComponent: React.FC = () => {
  const { data: userData, isLoading } = useGetCurrentUserQuery({});

  const user = userData?.user;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="profile">
      <header className="profile-header">
        <div className="profile-header-title">
          <h2>My Profile</h2>
        </div>
        <div className="profile-header-info">
          <div className="profile-header-info-img-container">
            <img
              src={`${config.API_URL}/${user?.avatar}`}
              alt="avatar"
              loading="lazy"
            />
          </div>
          <div>
            <h3>{user?.username}</h3>
            <p>{user?.email}</p>
            <p>User ID: {user?.userId}</p>
          </div>
        </div>
        <nav className="profile-header-navbar">
          <NavLink to="account">Account</NavLink>
          <NavLink to="payment">Payment</NavLink>
          <NavLink to="history">History</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export const Profile = guard(ProfileComponent);
