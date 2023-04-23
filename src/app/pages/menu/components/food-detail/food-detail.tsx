import React from 'react';
import { useParams } from 'react-router-dom';
import FavoriteIcon from 'assets/images/icons/favorite.svg';
import RatingIcon from 'assets/images/icons/start.svg';
import DeliveryTimeIcon from 'assets/images/icons/time.svg';
import { config } from '@core/config';
import { guard } from '@core/utils/HOC';
import { useAddToOrderMutation } from '@store/order';
import {
  useAddFavoriteProductMutation,
  useGetProductsQuery,
} from '@store/products';

import './style.scss';

const FoodDetailComponent: React.FC = () => {
  const params = useParams();

  const { data: productByTitle, isLoading } = useGetProductsQuery({
    title: params.title,
  });

  const product = productByTitle?.find(
    (item: any) => item.title === params.title,
  );

  const [addToCart] = useAddToOrderMutation();
  const [addToFavorite] = useAddFavoriteProductMutation();
  const addToOrder = async (id: string): Promise<any> => {
    await addToCart({ data: { id } });
  };

  const addToFavoriteProducts = async (id: string): Promise<any> => {
    await addToFavorite({ data: { id } });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="food-detail">
      <div className="food-detail-img-container">
        <img
          className="food-detail-img-container-dish"
          src={`${config.API_URL}/${product.photo}`}
          alt="dish"
        />
        <button
          onClick={() => addToFavoriteProducts(product.id)}
          type="button"
          className="food-detail-img-container-favorite"
        >
          <img src={FavoriteIcon} alt="add to favorite" />
        </button>
      </div>
      <div className="food-detail-description">
        <div className="food-detail-description-header">
          <div className="food-detail-description-header-title">
            <span className="food-detail-description-header-title-name">
              {product.title}
            </span>
            <span className="food-detail-description-header-title-type">
              {product.flavourType} {product.title?.toLowerCase()}
            </span>
          </div>
          <div className="food-detail-description-header-price">
            <span className="food-detail-description-header-price-usd">$</span>
            <span className="food-detail-description-header-price-amount">
              {product.price}
            </span>
          </div>
        </div>
        <div className="food-detail-description-info">
          <div className="food-detail-description-info-rating">
            <div className="food-detail-description-info-rating-img">
              <img src={RatingIcon} alt="rating" />
            </div>
            <span>{product.rating}</span>
          </div>
          <div className="food-detail-description-info-time">
            <div className="food-detail-description-info-time-img">
              <img src={DeliveryTimeIcon} alt="delivery time" />
            </div>
            <span>{product.deliveryTime} min</span>
          </div>
        </div>
        <div className="food-detail-description-about">
          <span>About</span>
          <p>{product.description}</p>
        </div>
        <div className="food-detail-description-btn">
          <button onClick={() => addToOrder(product.id)} type="button">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export const FoodDetail = guard(FoodDetailComponent);
