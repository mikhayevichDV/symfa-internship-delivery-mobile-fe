import React from 'react';
import { useParams } from 'react-router-dom';
import FavoriteIcon from 'assets/images/icons/favorite.svg';
import RatingIcon from 'assets/images/icons/start.svg';
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
        <div>
          <div>
            <span>{product.title}</span>
            <span>
              {product.flavourType} {product.title}
            </span>
          </div>
          <div>
            <span>$</span> <span>{product.price}</span>
          </div>
        </div>
        <div>
          <div>
            <img src={RatingIcon} alt="rating" />
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
