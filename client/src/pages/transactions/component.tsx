import { useDispatch, useSelector } from 'react-redux';

import {
  AppContainer,
  Loader,
  SearchBar,
  TransactionOverview
} from '@/components';
import {
  ApiTransactionInfoAC,
  TransactionFieldMR
} from '@/store/actions/transaction-info/action';
import { StoreState } from '@/store/reducers';
import { STTransactionsContent } from './style';

export const Transactions = () => {
  // ~~~~~~ Hooks

  const dispatch = useDispatch();

  // ~~~~~~ State

  const { search, isLoading, transactionSearch, errors } = useSelector(
    (state: StoreState) => state.transaction
  );

  // ~~~~~~ Handlers

  function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
    dispatch(TransactionFieldMR.search.MC.change(evt.target.value));
  }

  function onSubmitSearch() {
    dispatch(ApiTransactionInfoAC.start());
  }

  return (
    <AppContainer>
      {/* Search bar */}

      <SearchBar
        searchValue={search}
        placeholder="Search for transaction"
        onChange={onChange}
        onSubmitSearch={onSubmitSearch}
      />

      <STTransactionsContent>
        {isLoading ? (
          <Loader size={50} />
        ) : transactionSearch && !errors ? (
          <TransactionOverview />
        ) : (
          <div>{errors?.message || 'No results found'}</div>
        )}
      </STTransactionsContent>
    </AppContainer>
  );
};
