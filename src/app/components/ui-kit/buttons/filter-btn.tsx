import React, { useState } from 'react';

import './style.scss';

interface IFilterBtnProps {
  onClick?: any;
  label: string;
}

export const FilterBtn = ({ label, onClick }: IFilterBtnProps) => {
  const [active, setActive] = useState(false);

  const onClickActive = () => {
    onClick();
    setActive(!active);
  };

  return (
    <button
      className={active ? 'filter-btn active-btn' : 'filter-btn'}
      onClick={onClickActive}
      type="button"
    >
      {label}
    </button>
  );
};
