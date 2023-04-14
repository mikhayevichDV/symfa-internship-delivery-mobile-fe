import React from 'react';
import { typesRefactor } from '@core/utils';
import { Filters } from '@pages/menu/components/filters';
import { Header } from '@pages/menu/components/header';
import { useGetFlavourTypesQuery } from '@store/products';

import './style.scss';

export const Favorite: React.FC = () => {
  const { data: flavourTypes } = useGetFlavourTypesQuery({});

  return (
    <div>
      <Header title="Favorite food" />
      <Filters types={typesRefactor(flavourTypes)} />
    </div>
  );
};
