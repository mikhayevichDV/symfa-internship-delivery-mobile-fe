import React from 'react';
import { format } from '@core/utils';
import { useGetHistoryQuery } from '@store/history';
import { IHistory } from './models';

import './style.scss';

export const History = () => {
  const { data: history } = useGetHistoryQuery({});

  return (
    <div className="history">
      {history ? (
        <div className="history-list">
          {history.map((elem: IHistory) => {
            return (
              <div className="history-list-item">
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
