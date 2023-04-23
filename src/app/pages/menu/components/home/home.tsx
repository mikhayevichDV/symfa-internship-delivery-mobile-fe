import React, { useState } from 'react';
import { Filters, Header, ProductsContainer } from '@components/ui-kit';
import { typesRefactor } from '@core/utils';
import { guard } from '@core/utils/HOC';
import { useGetProductsQuery, useGetTypesQuery } from '@store/products';

import './style.scss';

const HomeComponent: React.FC = () => {
  const { data: types } = useGetTypesQuery({});

  const [filters, setFilters] = useState<string[]>([]);
  const [searchTitle, setSearchTitle] = useState<string>('');

  const { data: products } = useGetProductsQuery({
    types: filters,
    title: searchTitle,
  });

  const onChangeFilters = (activeFilters: string[]) => {
    setFilters(activeFilters);
  };

  const onChangeSearch = (search: string) => {
    setSearchTitle(search);
  };

  return (
    <div className="home">
      <Header title="Quality food" />
      <Filters
        onChangeSearch={onChangeSearch}
        onChangeFilters={onChangeFilters}
        types={typesRefactor(types)}
      />
      <ProductsContainer products={products} />
    </div>
  );
};

export const Home = guard(HomeComponent);
