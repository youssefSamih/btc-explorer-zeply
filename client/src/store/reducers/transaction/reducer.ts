import { TransactionFieldMR } from '@/store/actions/transaction-info/action';
import { ApiTransactionInfoAT } from '@/store/actions/transaction-info/action';
import {
  EpicApiTransactionInfoMC,
  EpicApiTransactionInfoMT
} from '@/store/epics/transaction-info/get/mutators';
import { dynReducer } from '@/utils/store';
import type { StoreState } from '@/store/reducers';

type State = StoreState['transaction'];

export const transactionInitState = {
  search: '',
  isLoading: false
};

const reducer: any = {
  ...TransactionFieldMR.search.Reducer
};

// ####################################################################################################
// ~~~~~~ address start search
// ####################################################################################################

reducer[ApiTransactionInfoAT.GET] = (state: State): State => {
  return {
    ...state,
    isLoading: true,
    errors: undefined
  };
};

// ####################################################################################################
// ~~~~~~ address search response ok
// ####################################################################################################

reducer[EpicApiTransactionInfoMT.OK] = (
  state: State,
  { payload }: ReturnType<typeof EpicApiTransactionInfoMC.ok>
): State => {
  return {
    ...state,
    transactionSearch: payload,
    isLoading: false
  };
};

// ####################################################################################################
// ~~~~~~ address search response error
// ####################################################################################################

reducer[EpicApiTransactionInfoMT.ERROR] = (
  state: State,
  { payload }: ReturnType<typeof EpicApiTransactionInfoMC.error>
): State => {
  return {
    ...state,
    errors: payload.errors,
    isLoading: false
  };
};

// ~~~~~~

export const transactionReducer = dynReducer(transactionInitState, reducer);
