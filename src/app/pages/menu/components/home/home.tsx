import React from 'react';
import { useAppDispatch } from '@core/hooks';
import { typesRefactor } from '@core/utils';
import { guard } from '@core/utils/HOC';
import { useGetProductsQuery, useGetTypesQuery } from '@store/products';
import { setProducts } from '@store/products/products-slice';
import { Filters } from '../filters';
import { Header } from '../header';
import { ProductsContainer } from '../products-container';

import './style.scss';

const HomeComponent: React.FC = () => {
  const { data: products } = useGetProductsQuery({});
  const { data: types } = useGetTypesQuery({});

  const dispatch = useAppDispatch();

  dispatch(setProducts(products));

  return (
    <div className="home">
      <Header title="Quality food" />
      <Filters types={typesRefactor(types)} />
      <ProductsContainer products={products} />
    </div>
  );
};

export const Home = guard(HomeComponent);
