import React from 'react';
import { FavoriteAd } from '@components/ui-kit';
import { typesRefactor } from '@core/utils';
import { guard } from '@core/utils/HOC';
import { Filters } from '@pages/menu/components/filters';
import { Header } from '@pages/menu/components/header';
import { ProductsContainer } from '@pages/menu/components/products-container';
import {
  useGetFavoriteProductsQuery,
  useGetFlavourTypesQuery,
} from '@store/products';

import './style.scss';

const FavoriteComponent: React.FC = () => {
  const { data: flavourTypes } = useGetFlavourTypesQuery({});
  const { data: favoriteProducts } = useGetFavoriteProductsQuery({});

  return (
    <div className="favorite">
      <Header title="Favorite food" />
      <Filters types={typesRefactor(flavourTypes)} />
      <div className="favorite-ad-container">
        <FavoriteAd />
      </div>
      <div>
        <span>Your Favorite</span>
        <button type="button">More</button>
      </div>
      <ProductsContainer products={favoriteProducts} />
    </div>
  );
};

export const Favorite = guard(FavoriteComponent);
