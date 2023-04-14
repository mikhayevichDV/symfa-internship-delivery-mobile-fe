import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductCard } from '@components/ui-kit';
import { config } from '@core/config';

import './style.scss';
// TODO types
export const ProductsContainer = ({ products }: any) => {
  return (
    <div className="product-container">
      {products?.map((item: any) => {
        return (
          <NavLink key={item.id} to={`food-detail/${item.title}`}>
            <ProductCard
              key={item.id}
              title={item.title}
              flavourType={item.flavourType}
              price={item.price}
              photo={`${config.API_URL}/${item.photo.photoPath}`}
            />
          </NavLink>
        );
      })}
    </div>
  );
};
