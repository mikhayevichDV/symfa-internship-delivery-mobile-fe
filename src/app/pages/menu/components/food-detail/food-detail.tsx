import React from 'react';
import { useParams } from 'react-router-dom';
import FavoriteIcon from 'assets/images/icons/favorite.svg';
import RatingIcon from 'assets/images/icons/start.svg';
import DeliveryTimeIcon from 'assets/images/icons/time.svg';
import { config } from '@core/config';
import { useGetProductByTitleQuery } from '@store/products';

import './style.scss';

export const FoodDetail: React.FC = () => {
  const params = useParams();

  const { data: product, isLoading } = useGetProductByTitleQuery(params.title);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="food-detail">
      <div className="food-detail-img-container">
        <img
          className="food-detail-img-container-dish"
          src={`${config.API_URL}/${product.photo.photoPath}`}
          alt="dish"
        />
        <button type="button" className="food-detail-img-container-favorite">
          <img src={FavoriteIcon} alt="add to favorite" />
        </button>
      </div>
      <div className="food-detail-description">
        <div className="food-detail-description-header">
          <div className="food-detail-description-header-title">
            <span>{product.title}</span>
            <span>
              {product.flavourType} {product.title}
            </span>
          </div>
          <div>
            <span>$</span> <span>{product.price}</span>
          </div>
        </div>
        <div className="food-detail-description-info">
          <div className="food-detail-description-info-rating">
            <img src={RatingIcon} alt="rating" />
            <span>{product.rating}</span>
          </div>
          <div className="food-detail-description-info-time">
            <img src={DeliveryTimeIcon} alt="delivery time" />
            <span>{product.deliveryTime} min</span>
          </div>
        </div>
        <div className="food-detail-description-about">
          <span>About</span>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};
