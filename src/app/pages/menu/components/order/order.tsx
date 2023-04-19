import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseBtn from 'assets/images/icons/close.svg';
import PromocodeIcon from 'assets/images/icons/promo_code.svg';
import { config } from '@core/config';
import { useAppSelector } from '@core/hooks';
import {
  useDecrementCountMutation,
  useGetOrderQuery,
  useGetTotalQuery,
  useIncrementCountMutation,
} from '@store/order';
import { useGetPromocodesQuery } from '@store/promo-codes';

import './style.scss';

export const Order: React.FC = () => {
  const [promocode, setPromocode] = useState<string>('');
  const navigate = useNavigate();
  const userId = useAppSelector(state => state?.user?.user?.id);

  const [increment] = useIncrementCountMutation();
  const [decrement] = useDecrementCountMutation();
  const { data: order } = useGetOrderQuery(userId);
  const { data: total } = useGetTotalQuery(userId);
  const { data: promocodes } = useGetPromocodesQuery({});

  const onPromocodeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPromocode(event.target.value);
    },
    [],
  );

  const subtotal = () => {
    if (!promocodes) {
      return 0;
    }

    for (const key in promocodes) {
      if (key === promocode) {
        console.log(1);
      }
    }
  };

  console.log(promocodes, promocode);
  console.log(subtotal());

  return (
    <div className="order">
      <header className="order-header">
        <h2 className="order-header-title">My Order</h2>
        <button
          className="order-header-close-btn"
          type="button"
          onClick={() => navigate(-1)}
        >
          <img
            className="order-header-close-btn-img"
            src={CloseBtn}
            alt="close"
          />
        </button>
      </header>
      <div className="order-content">
        {order?.map((elem: any) => {
          return (
            <div className="order-content-item" key={elem.id}>
              <img
                className="order-content-item-img"
                src={`${config.API_URL}/${elem.photo.photoPath}`}
                alt="dish"
                loading="lazy"
              />
              <div className="order-content-item-">
                <div>
                  <span>{elem.title}</span>
                  <span>
                    {elem.flavourType} {elem.title}
                  </span>
                </div>
                <div>
                  <p>
                    <span>$</span>{' '}
                    <span>{(elem.price * elem.count).toFixed(2)}</span>
                  </p>
                  <div>
                    <button
                      type="button"
                      onClick={() => decrement({ id: elem.orderId })}
                    >
                      -
                    </button>
                    <span>{elem.count}</span>
                    <button
                      type="button"
                      onClick={() => increment({ id: elem.orderId })}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="order-promo-code">
        <img src={PromocodeIcon} alt="promo-code" />
        <input type="text" onChange={onPromocodeChange} />
        <button type="button">Apply</button>
      </div>
      <div className="order-total">
        <div>
          <span>Subtotal</span>
          <span>{total}</span>
        </div>
        <div>
          <span>Delivery</span>
          <span>Free</span>
        </div>
        <div>
          <span>Total</span>
          <span>{total}</span>
        </div>
      </div>
    </div>
  );
};
