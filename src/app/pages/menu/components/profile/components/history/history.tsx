import React, { useEffect } from 'react';
import { format } from '@core/utils';
import { useGetHistoryMutation } from '@store/history';
import { IHistory } from './models';

import './style.scss';

export const History = () => {
  const [getHistory, { data: history }] = useGetHistoryMutation({});

  useEffect(() => {
    getHistory({});
    const time = setInterval(() => {
      getHistory({});
    }, 60000);

    return () => clearInterval(time);
  }, []);

  const delivered = history?.filter(
    (elem: IHistory) => elem.status === 'delivered',
  );

  return (
    <div className="history">
      {delivered?.length > 1 ? (
        <div className="history-list">
          {delivered.map((elem: IHistory) => {
            return (
              <div key={elem.orderId} className="history-list-item">
                <p>
                  <b>Order ID:</b> {elem.orderId}
                </p>
                <p>
                  <b>Address:</b> {elem.address}
                </p>
                <p>
                  <b>Total:</b> {elem.total}$
                </p>
                <p>
                  <b>Status:</b> {elem.status}
                </p>
                <p>
                  <b>Date:</b> {format(elem.updatedAt, 'DD MM YYYY')}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>History list empty(</div>
      )}
    </div>
  );
};
