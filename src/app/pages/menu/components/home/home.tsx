import React from 'react';
import { ProductsContainer } from '@pages/menu/components/products-container';
import { useGetProductsQuery, useGetTypesQuery } from '@store/products';
import { Filters } from '../filters';
import { Header } from '../header';

import './style.scss';

export const Home: React.FC = () => {
  const { data: types } = useGetTypesQuery({});
  const { data: products } = useGetProductsQuery({});

  console.log(products);
  console.log(types);

  return (
    <div className="home">
      <Header title="Quality food" />
      <Filters />
      <ProductsContainer products={products} />
    </div>
  );
};
