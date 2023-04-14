import React, { FC } from 'react';
import FavoriteIcon from 'assets/images/icons/favorite.svg';

import './style.scss';

export interface IProductCardProps {
  title: string;
  flavourType: string;
  price: number;
  photo: string;
}

export const ProductCard: FC<IProductCardProps> = ({
  title,
  flavourType,
  price,
  photo,
}) => {
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
      <button className="product-card-btn" type="button">
        <span className="product-card-btn-label">Add to Cart</span>
      </button>
    </div>
  );
};
