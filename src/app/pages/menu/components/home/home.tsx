import React from 'react';
import { typesRefactor } from '@core/utils';
import { useGetProductsQuery, useGetTypesQuery } from '@store/products';
import { Filters } from '../filters';
import { Header } from '../header';
import { ProductsContainer } from '../products-container';

import './style.scss';

export const Home: React.FC = () => {
  const { data: products } = useGetProductsQuery({});
  const { data: types } = useGetTypesQuery({});

  return (
    <div className="home">
      <Header title="Quality food" />
      <Filters types={typesRefactor(types)} />
      <ProductsContainer products={products} />
    </div>
  );
};
