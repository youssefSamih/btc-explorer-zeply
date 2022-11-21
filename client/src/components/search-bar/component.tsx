import React, { useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useDispatch, useSelector } from 'react-redux';

import { ApiTransactionInfoAC } from '@/store/actions/transaction-info/action';
import { LazySVG } from '@/components';
import { StoreState } from '@/store/reducers';
import { config } from '@/config';
import {
  STInputSearch,
  STSearchBar,
  STSubmitSearch,
  STSubscribeButton
} from './style';

// ~~~~~ Types

type Props = {
  placeholder?: string;
  searchValue: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSubmitSearch?(): void;
};

// ~~~~~ Constants

const SearchIcon = LazySVG('icons/search');

const ICON_SEARCH_LOAD_SIZE = 20;

// ~~~~~~ Component

export const SearchBar = ({
  placeholder,
  searchValue,
  onChange,
  onSubmitSearch
}: Props) => {
  // ~~~~~~ Hooks

  const dispatch = useDispatch();

  const { lastJsonMessage, sendJsonMessage, readyState } = useWebSocket<{
    x: {
      hash: string;
    };
  }>(config.Api.WEBSOCKET, {
    shouldReconnect: () => true
  });

  // ~~~~~~ State

  const { addressSearch, search } = useSelector(
    (state: StoreState) => state.address
  );

  const { notificationHashes } = useSelector(
    (state: StoreState) => state.transaction
  );

  // ~~~~~~ Computed

  const isSubmitDisabled = searchValue?.trim().length === 0;

  // ~~~~~~ Handlers

  function subscribe() {
    // if (!search && !addressSearch) return;

    sendJsonMessage({
      op: 'addr_sub',
      addr: search
    });
  }

  // ~~~~~~ Effects

  useEffect(() => {
    const isTransactionNotifExist = notificationHashes?.includes(
      lastJsonMessage?.x.hash
    );

    if (isTransactionNotifExist || !lastJsonMessage?.x.hash) return;

    dispatch(ApiTransactionInfoAC.setNotification(lastJsonMessage?.x.hash));
  }, [dispatch, lastJsonMessage]);

  // ~~~~~~ Render

  return (
    <STSearchBar>
      <STInputSearch
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={searchValue}
      />

      {search && addressSearch ? (
        <STSubscribeButton
          onClick={subscribe}
          disabled={readyState !== ReadyState.OPEN}
        >
          Subscribe
        </STSubscribeButton>
      ) : undefined}

      <STSubmitSearch disabled={isSubmitDisabled} onClick={onSubmitSearch}>
        <SearchIcon size={ICON_SEARCH_LOAD_SIZE} />
      </STSubmitSearch>
    </STSearchBar>
  );
};
