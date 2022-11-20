import { useDispatch, useSelector } from 'react-redux';

import { AppContainer, Loader, AddressOverview, SearchBar } from '@/components';
import { StoreState } from '@/store/reducers';
import {
  AddressFieldMR,
  ApiAddressInfoAC
} from '@/store/actions/address-info/action';
import { STAddressesContent } from './style';

// ~~~~~~ Component

export const Addresses = () => {
  // ~~~~~~ Hooks

  const dispatch = useDispatch();

  // ~~~~~~ State

  const { isLoading, addressSearch, errors, search } = useSelector(
    (state: StoreState) => state.address
  );

  // ~~~~~~ Handlers

  function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
    dispatch(AddressFieldMR.search.MC.change(evt.target.value));
  }

  function onSubmitSearch() {
    dispatch(ApiAddressInfoAC.start());
  }

  // ~~~~~~ Render

  return (
    <AppContainer>
      {/* Search bar */}

      <SearchBar
        searchValue={search}
        placeholder="Search for address"
        onChange={onChange}
        onSubmitSearch={onSubmitSearch}
      />

      {/* Overview */}

      <STAddressesContent>
        {isLoading ? (
          <Loader size={50} />
        ) : addressSearch && !errors ? (
          <AddressOverview />
        ) : (
          <div>{errors?.data.message || 'No results found'}</div>
        )}
      </STAddressesContent>
    </AppContainer>
  );
};
