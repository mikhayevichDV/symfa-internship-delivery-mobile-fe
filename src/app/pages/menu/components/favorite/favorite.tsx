import React from 'react';
import { FavoriteAd } from '@components/ui-kit';
import { useAppSelector } from '@core/hooks';
import { typesRefactor } from '@core/utils';
import { Filters } from '@pages/menu/components/filters';
import { Header } from '@pages/menu/components/header';
import { ProductsContainer } from '@pages/menu/components/products-container';
import {
  useGetFavoriteProductsQuery,
  useGetFlavourTypesQuery,
} from '@store/products';

import './style.scss';

export const Favorite: React.FC = () => {
  const { data: flavourTypes } = useGetFlavourTypesQuery({});
  const userId = useAppSelector(state => state?.user?.user?.id);
  const { data: favoriteProducts } = useGetFavoriteProductsQuery(userId);

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
