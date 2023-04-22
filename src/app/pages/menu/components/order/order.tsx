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
  const [discountValue, setDiscountValue] = useState<string>('');
  const [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();
  const userAddress = useAppSelector(state => state?.user?.user?.address);

  const [increment] = useIncrementCountMutation();
  const [decrement] = useDecrementCountMutation();
  const [confirmOrder] = useCreateHistoryMutation();
  const { data: order } = useGetOrderQuery({});
  const { data: subtotal } = useGetTotalQuery({});
  const { data: discount } = useGetPromocodeQuery(discountValue);

  const onPromocodeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPromocodeValue(event.target.value);
    },
    [],
  );

  const usePromocode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDiscountValue(promocodeValue);

    setTotal(subtotal - (subtotal / 100) * discount);
  };

  const onConfirm = async () => {
    await confirmOrder({ address: userAddress });
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
              <div className="order-content-item-info">
                <div className="order-content-item-info-title">
                  <span className="order-content-item-bold">{elem.title}</span>
                  <span>
                    {elem.flavourType} {elem.title.toLowerCase()}
                  </span>
                </div>
                <div className="order-content-item-info-price">
                  <p>
                    <span className="order-content-item-usd">$</span>
                    <span className="order-content-item-bold">
                      {(elem.price * elem.count).toFixed(2)}
                    </span>
                  </p>
                  <div className="order-content-item-info-price-count">
                    <button
                      type="button"
                      className="order-content-item-info-price-count-btn"
                      onClick={() => decrement({ id: elem.orderId })}
                    >
                      -
                    </button>
                    <span className="order-content-item-bold">
                      {elem.count}
                    </span>
                    <button
                      type="button"
                      className="order-content-item-info-price-count-btn"
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
          placeholder="Promo code..."
          value={promocodeValue}
          onChange={onPromocodeChange}
        />
        <button type="submit">Apply</button>
      </form>
      <div className="order-bill">
        <div className="order-bill-item">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <hr />
        <div className="order-bill-item">
          <span>Delivery</span>
          <span>Free</span>
        </div>
        <hr />
        <div className="order-bill-item">
          <span className="order-bill-item-total">Total</span>
          <span className="order-bill-item-price">${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="order-confirm-btn" onClick={onConfirm} type="button">
        Confirm order
      </button>
    </div>
  );
};

export const Order = guard(OrderComponent);
