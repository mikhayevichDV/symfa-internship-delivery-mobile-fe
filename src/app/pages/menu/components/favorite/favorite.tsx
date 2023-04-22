import React from 'react';
import { FavoriteAd } from '@components/ui-kit';
import { guard } from '@core/utils/HOC';
import { Header } from '@pages/menu/components/header';
import { ProductsContainer } from '@pages/menu/components/products-container';
import { useGetFavoriteProductsQuery } from '@store/products';

import './style.scss';

const FavoriteComponent: React.FC = () => {
  // const { data: flavourTypes } = useGetFlavourTypesQuery({});
  const { data: favoriteProducts } = useGetFavoriteProductsQuery({});

  return (
    <div className="favorite">
      <Header title="Favorite food" />
      {/* <Filters */}
      {/*  onChangeFilters={console.log} */}
      {/*  types={typesRefactor(flavourTypes)} */}
      {/* /> */}
      <div className="favorite-ad-container">
        <FavoriteAd />
      </div>
      <div className="favorite-yourfav">
        <span>Your Favorite</span>
        <button type="button">See more</button>
      </div>
      <ProductsContainer products={favoriteProducts} />
    </div>
  );
};

export const Favorite = guard(FavoriteComponent);
