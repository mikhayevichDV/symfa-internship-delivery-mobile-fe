import React, { FC } from 'react';

import './style.scss';

interface IProductCardProps {
  title: string;
  type: string;
  price: number;
  photo: string;
}

export const ProductCard: FC<IProductCardProps> = ({
  title,
  type,
  price,
  photo,
}) => {
  return (
    <div className="product-card">
      <img src={photo} alt={title} />
      <h1>{title}</h1>
      <p>
        {type} {title}
      </p>
      <p>
        <span>$</span>
        {price}
      </p>
    </div>
  );
};
