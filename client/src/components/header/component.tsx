import { useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import { useDispatch, useSelector } from 'react-redux';

import { config } from '@/config';
import type { StoreState } from '@/store/reducers';
import { CurrencySelect, LazySVG } from '@/components';
import {
  STHeader,
  STHeaderLogo,
  STHeaderLogoSvg,
  STHeaderNotification,
  STLeftHeader
} from './style';
import { ApiTransactionInfoAC } from '@/store/actions/transaction-info/action';

// ~~~~~~ Constants

const LogoSvg = LazySVG('logos/main-logo');
const NotificationSvg = LazySVG('icons/notification');

const LogoLoaderSize = 48;
const NotificationLoaderSize = 30;

// ~~~~~~ Component

export const Header = () => {
  // ~~~~~~ Hooks

  const dispatch = useDispatch();

  const { lastJsonMessage, sendJsonMessage, readyState } = useWebSocket<{
    x: {
      hash: string;
    };
  }>(config.Api.WEBSOCKET, {
    onOpen: subscribe,
    shouldReconnect: () => true
  });

  // ~~~~~~ State

  const { notificationHashes } = useSelector(
    (state: StoreState) => state.transaction
  );

  // ~~~~~~ Handlers

  function subscribe() {
    sendJsonMessage({
      op: 'unconfirmed_sub'
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
    <STHeader>
      <STHeaderLogo>
        <STHeaderLogoSvg>
          <LogoSvg size={LogoLoaderSize} />
        </STHeaderLogoSvg>
        BTC Explorer
      </STHeaderLogo>

      <STLeftHeader>
        <CurrencySelect />

        <STHeaderNotification>
          <NotificationSvg size={NotificationLoaderSize} />
        </STHeaderNotification>
      </STLeftHeader>
    </STHeader>
  );
};
