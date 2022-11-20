import React from 'react';

import { LazySVG } from '@/components';
import { STInputSearch, STSearchBar, STSubmitSearch } from './style';

// ~~~~~ Types

type Props = {
  placeholder?: string;
  searchValue: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSubmitSearch?(): void;
};

// ~~~~~ Constants

const SearchIcon = LazySVG('icons/search');

// ~~~~~~ Component

export const SearchBar = ({
  placeholder,
  searchValue,
  onChange,
  onSubmitSearch
}: Props) => {
  // ~~~~~~ State

  const ICON_SEARCH_LOAD_SIZE = 20;

  // ~~~~~~ Computed

  const isSubmitDisabled = searchValue?.trim().length === 0;

  // ~~~~~~ Render

  return (
    <STSearchBar>
      <STInputSearch
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={searchValue}
      />
      <STSubmitSearch disabled={isSubmitDisabled} onClick={onSubmitSearch}>
        <SearchIcon size={ICON_SEARCH_LOAD_SIZE} />
      </STSubmitSearch>
    </STSearchBar>
  );
};
