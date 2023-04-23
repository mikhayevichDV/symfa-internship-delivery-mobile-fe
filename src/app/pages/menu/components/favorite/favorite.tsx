import React, { useState } from 'react';
import {
  FavoriteAd,
  Filters,
  Header,
  ProductsContainer,
} from '@components/ui-kit';
import { typesRefactor } from '@core/utils';
import { guard } from '@core/utils/HOC';
import {
  useGetFavoriteProductsQuery,
  useGetFlavourTypesQuery,
} from '@store/products';

import './style.scss';

const FavoriteComponent: React.FC = () => {
  const { data: flavourTypes } = useGetFlavourTypesQuery({});

  const [filters, setFilters] = useState<string[]>([]);
  const [searchTitle, setSearchTitle] = useState<string>('');

  const { data: favoriteProducts } = useGetFavoriteProductsQuery({
    flavourTypes: filters,
    title: searchTitle,
  });

  const onChangeFilters = (activeFilters: string[]) => {
    setFilters(activeFilters);
  };

  const onChangeSearch = (search: string) => {
    setSearchTitle(search);
  };

  return (
    <div className="favorite">
      <Header title="Favorite food" />
      <Filters
        onChangeSearch={onChangeSearch}
        onChangeFilters={onChangeFilters}
        types={typesRefactor(flavourTypes)}
      />
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
