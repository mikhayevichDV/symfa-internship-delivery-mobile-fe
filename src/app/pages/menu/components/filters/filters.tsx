import React, { useState } from 'react';
import FilterIcon from 'assets/images/icons/filter.svg';
import SearchIcon from 'assets/images/icons/search.svg';

import './style.scss';

export const Filters = ({ types }: any) => {
  const [isFilterContainerVisible, setFilterContainerVisible] =
    useState<boolean>(false);

  return (
    <div className="filters">
      <div className="filters-controller">
        <form>
          <button type="submit">
            <img src={SearchIcon} alt="search" />
          </button>
          <input type="text" placeholder="Search food..." />
        </form>
        <button
          className={
            isFilterContainerVisible
              ? 'filters-controller-btn filters-controller-btn-active'
              : 'filters-controller-btn'
          }
          onClick={() => setFilterContainerVisible(!isFilterContainerVisible)}
          type="button"
        >
          <img src={FilterIcon} alt="filter" />
        </button>
      </div>
      <div className="filters-container">
        <div
          className={
            isFilterContainerVisible
              ? 'filters-container-wrapper-active'
              : 'filters-container-wrapper'
          }
        >
          {types?.map((item: any) => (
            <button className="filters-container-wrapper-item" type="button">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
