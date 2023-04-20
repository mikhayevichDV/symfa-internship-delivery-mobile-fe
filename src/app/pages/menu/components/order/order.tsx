import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseBtn from 'assets/images/icons/close.svg';
import PromocodeIcon from 'assets/images/icons/promo_code.svg';
import { config } from '@core/config';
import { useAppSelector } from '@core/hooks';
import { guard } from '@core/utils/HOC';
import { useCreateHistoryMutation } from '@store/history';
import {
  useDecrementCountMutation,
  useGetOrderQuery,
  useGetTotalQuery,
  useIncrementCountMutation,
} from '@store/order';
import { useGetPromocodeQuery } from '@store/promo-codes';

import './style.scss';

const OrderComponent: React.FC = () => {
  const [promocodeValue, setPromocodeValue] = useState<string>('');
  const [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();
  const userAddress = useAppSelector(state => state?.user?.user?.address);

  const [increment] = useIncrementCountMutation();
  const [decrement] = useDecrementCountMutation();
  const [confirmOrder] = useCreateHistoryMutation();
  const { data: order } = useGetOrderQuery({});
  const { data: subtotal } = useGetTotalQuery({});
  const { data: discount } = useGetPromocodeQuery(promocodeValue);

  const onPromocodeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPromocodeValue(event.target.value);
    },
    [],
  );

  const usePromocode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTotal(subtotal - (subtotal / 100) * discount);
  };

  const onConfirm = async (): Promise<any> => {
    await confirmOrder({ data: { userAddress } });
  };

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
      <form className="order-promo-code" onSubmit={usePromocode}>
        <img src={PromocodeIcon} alt="promo-code" />
        <input
          type="text"
          value={promocodeValue}
          onChange={onPromocodeChange}
        />
        <button type="submit">Apply</button>
      </form>
      <div className="order-total">
        <div>
          <span>Subtotal</span>
          <span>{subtotal}</span>
        </div>
        <div>
          <span>Delivery</span>
          <span>Free</span>
        </div>
        <div>
          <span>Total</span>
          <span>{total.toFixed(2)}</span>
        </div>
      </div>
      <button onClick={onConfirm} type="button">
        {' '}
        Confirm order{' '}
      </button>
    </div>
  );
};

export const Order = guard(OrderComponent);
