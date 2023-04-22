import React, { useState } from 'react';
import { typesRefactor } from '@core/utils';
import { guard } from '@core/utils/HOC';
import { useGetProductsQuery, useGetTypesQuery } from '@store/products';
import { Filters } from '../filters';
import { Header } from '../header';
import { ProductsContainer } from '../products-container';

import './style.scss';

const HomeComponent: React.FC = () => {
  const { data: types } = useGetTypesQuery({});

  const [filters, setFilters] = useState<string[]>([]);
  const [searchTitle, setSearchTitle] = useState<string>('');

  const { data: products } = useGetProductsQuery({
    types: filters,
    title: searchTitle,
  });

  console.log(products);

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
