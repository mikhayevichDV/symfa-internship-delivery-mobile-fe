import React, { useState } from 'react';
import FilterIcon from 'assets/images/icons/filter.svg';
import SearchIcon from 'assets/images/icons/search.svg';

import './style.scss';

export const Filters = ({
  types,
  onChangeSearch,
  onChangeFilters,
}: {
  types: string[];
  onChangeFilters: (filters: string[]) => void;
  onChangeSearch: (search: string) => void;
}) => {
  const [isFilterContainerVisible, setFilterContainerVisible] =
    useState<boolean>(false);
  const [filters, setFilters] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');

  const onToggleFilter = (type: string) => {
    const activeFilters = filters.includes(type)
      ? filters.filter(elem => elem !== type)
      : [...filters, type];

    setFilters(activeFilters);
    onChangeFilters(activeFilters);
  };

  const searchSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onChangeSearch(search);
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="filters">
      <div className="filters-controller">
        <form>
          <button onClick={searchSubmit} type="submit">
            <img src={SearchIcon} alt="search" />
          </button>
          <input
            onChange={searchHandler}
            type="text"
            placeholder="Search food..."
          />
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
            <button
              onClick={() => onToggleFilter(item)}
              className="filters-container-wrapper-item"
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
