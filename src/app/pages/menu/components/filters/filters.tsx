import React, { useState } from 'react';
import FilterIcon from 'assets/images/icons/filter.svg';
import SearchIcon from 'assets/images/icons/search.svg';

import './style.scss';

export const Filters = () => {
  const [isFilterActive, setFilterActive] = useState<boolean>(false);

  return (
    <div className="filters">
      <form>
        <button type="submit">
          <img src={SearchIcon} alt="search" />
        </button>
        <input type="text" placeholder="Search..." />
      </form>
      <button
        className={
          isFilterActive ? 'filters-btn filters-btn-active' : 'filters-btn'
        }
        onClick={() => setFilterActive(!isFilterActive)}
        type="button"
      >
        <img src={FilterIcon} alt="filter" />
      </button>
    </div>
  );
};
