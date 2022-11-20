import type { Action } from '@reduxjs/toolkit';

import type { ApiResError } from '@/services/types';
import type { AddressInfoApiGetRes } from '@/services/address-search/get';
import type { TransactionInfoApiGetRes } from '@/services/transactions-search/get';
import { addressInitState, addressReducer } from './address/reducer';
import {
  transactionInitState,
  transactionReducer
} from './transaction/reducer';

type Model = {
  address: {
    search: string;
    isLoading: boolean;
    addressSearch?: AddressInfoApiGetRes;
    errors?: ApiResError;
  };
  transaction: {
    search: string;
    isLoading: boolean;
    errors?: ApiResError;
    transactionSearch?: TransactionInfoApiGetRes;
  };
};

export const AppInitState: Model = {
  address: addressInitState,
  transaction: transactionInitState
};

export type StoreState = typeof AppInitState;

type StoreStateProps = keyof StoreState;

type Reducers = {
  [key in StoreStateProps]: (state: any, action: Action) => any;
};

const reducers: Reducers = {
  address: addressReducer,
  transaction: transactionReducer
};

export default reducers;
