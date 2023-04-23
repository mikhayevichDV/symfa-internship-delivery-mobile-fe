import React, { useEffect } from 'react';
import PhoneIcon from 'assets/images/icons/call.svg';
import MapIcon from 'assets/images/icons/map.svg';
import ClockIcon from 'assets/images/icons/time.svg';
import { config } from '@core/config';
import { guard } from '@core/utils/HOC';
import { IHistory } from '@pages/menu/components/profile/components/history/models';
import { useGetHistoryMutation } from '@store/history';
import { IUserRequest } from '@store/user/models/user.interface';

import './style.scss';

const NotificationsComponent: any = () => {
  const [getHistory, { data: history }] = useGetHistoryMutation({});

  useEffect(() => {
    getHistory({});
    const time = setInterval(() => {
      getHistory({});
    }, 60000);

    return () => clearInterval(time);
  }, []);

  const preparing = history?.filter(
    (elem: IHistory) => elem.status === 'Preparing',
  );

  return (
    <div className="notifications">
      <div className="notifications-header">
        <h2>Notifications</h2>
      </div>
      <div className="notifications-content">
        {preparing?.length > 0 ? (
          preparing.map((elem: IHistory) => {
            return (
              <div key={elem.orderId} className="notifications-content-item">
                <div className="notifications-content-item-courier">
                  {elem.courier.map((item: IUserRequest) => {
                    return (
                      <div
                        key={item.userId}
                        className="notifications-content-item-courier-info"
                      >
                        <img
                          className="notifications-content-item-courier-info-img"
                          src={`${config.API_URL}/${item?.avatar}`}
                          alt="courier"
                        />
                        <div className="notifications-content-item-courier-info-text">
                          <p className="notifications-content-item-courier-info-text-username">
                            {item.username}
                          </p>
                          <p className="notifications-content-item-courier-info-text-id">
                            ID: {item.userId}
                          </p>
                          <p className="notifications-content-item-courier-info-text-role">
                            Food courier
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  <div className="notifications-content-item-courier-call">
                    <button
                      className="notifications-content-item-courier-call-btn"
                      type="button"
                    >
                      <img src={PhoneIcon} alt="call" />
                    </button>
                  </div>
                </div>
                <hr className="notifications-content-item-delimiter" />
                <div className="notifications-content-item-order">
                  <div className="notifications-content-item-order-unit">
                    <img src={ClockIcon} alt="clock" />
                    <div className="notifications-content-item-order-unit-text">
                      <p className="notifications-content-item-order-unit-text-title">
                        Your Delivery Time
                      </p>
                      <p className="notifications-content-item-order-unit-text-content">
                        {elem.deliveryTime} minutes
                      </p>
                    </div>
                  </div>
                  <div className="notifications-content-item-order-unit">
                    <img src={MapIcon} alt="map" />
                    <div className="notifications-content-item-order-unit-text">
                      <p className="notifications-content-item-order-unit-text-title">
                        Your Delivery Address
                      </p>
                      <p className="notifications-content-item-order-unit-text-content">
                        {elem.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No active orders</div>
        )}
      </div>
    </div>
  );
};

export const Notifications = guard(NotificationsComponent);
