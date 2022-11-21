import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { StoreState } from '@/store/reducers';
import {
  ApiCurrencyRateAC,
  CurrencyFieldMR
} from '@/store/actions/currency-rate/action';
import { STCurrencySelect } from './style';

// ~~~~~~ Component

export const CurrencySelect = () => {
  // ~~~~~~ Hooks

  const dispatch = useDispatch();

  // ~~~~~~ State

  const [isMounted, setIsMounted] = useState(false);

  const { isLoading, currencyRates, currency } = useSelector(
    (state: StoreState) => state.currency
  );

  // ~~~~~~ Computed

  const options = currencyRates?.btc
    ? Object.entries(currencyRates.btc).map(([key, value]) => ({
        label: key.toUpperCase(),
        value: `${value}`
      }))
    : [];

  const valueOption = {
    label: currency?.toUpperCase(),
    value: currencyRates?.btc[currency] || '1'
  };

  // ~~~~~~ Handlers

  function onChange(evt: any) {
    dispatch(CurrencyFieldMR.currency.MC.change(evt?.label));
  }

  // ~~~~~~ Effects

  useEffect(() => {
    if (isMounted || currencyRates?.[currency] || isLoading) return;

    setIsMounted(true);

    dispatch(ApiCurrencyRateAC.start());
  }, [dispatch, currencyRates, isLoading]);

  // ~~~~~~ Render

  return (
    <STCurrencySelect>
      <Select
        options={options}
        isLoading={isLoading}
        onChange={onChange}
        value={valueOption}
      />
    </STCurrencySelect>
  );
};
