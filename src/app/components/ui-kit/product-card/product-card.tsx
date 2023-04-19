import React, { FC, MouseEvent } from 'react';
import FavoriteIcon from 'assets/images/icons/favorite.svg';
import { useAppSelector } from '@core/hooks';
import { useAddToOrderMutation } from '@store/order';

import './style.scss';

export interface IProductCardProps {
  id: string;
  title: string;
  flavourType: string;
  price: number;
  photo: string;
  item: any;
}

export const ProductCard: FC<IProductCardProps> = ({
  id,
  title,
  flavourType,
  price,
  photo,
}) => {
  const userId = useAppSelector(state => state?.user?.user?.id);
  const [addToCart] = useAddToOrderMutation();
  const addToOrder = async (e: MouseEvent<HTMLButtonElement>): Promise<any> => {
    e.preventDefault();
    await addToCart({ id: userId, data: { id } });
  };

  return (
    <div className="product-card">
      <div className="product-card-img">
        <img className="product-card-img-item" src={photo} alt={title} />
        <button type="button" className="product-card-img-favorite">
          <img src={FavoriteIcon} alt="add to favorite" />
        </button>
      </div>
      <span className="product-card-title">{title}</span>
      <span className="product-card-description">
        {flavourType} {title}
      </span>
      <div className="product-card-price">
        <span className="product-card-price-currency">$</span>
        <span className="product-card-price-count">{price}</span>
      </div>
      <button onClick={addToOrder} className="product-card-btn" type="button">
        <span className="product-card-btn-label">Add to Cart</span>
      </button>
    </div>
  );
};
