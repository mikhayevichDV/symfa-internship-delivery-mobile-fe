import React from 'react';
import { Filters } from '@pages/menu/components/filters';
import { Header } from '@pages/menu/components/header';
import { useGetFlavourTypesQuery } from '@store/products';

import './style.scss';

export const Favorite: React.FC = () => {
  const { data } = useGetFlavourTypesQuery({});

  console.log(data);

  return (
    <div>
      <Header title="Favorite food" />
      <Filters />
    </div>
  );
};
