import { dynReducer } from '@/utils/store';
import type { StoreState } from '@/store/reducers';
import {
  ApiCurrencyRateAT,
  CurrencyFieldMR
} from '@/store/actions/currency-rate/action';
import {
  EpicApiCurrencyRateMC,
  EpicApiCurrencyRateMT
} from '@/store/epics/currency-rate/get/mutators';

type State = StoreState['currency'];

export const currencyRateInitState = {
  isLoading: false,
  currency: 'btc'
};

const reducer: any = {
  ...CurrencyFieldMR.currency.Reducer
};

// ####################################################################################################
// ~~~~~~ currency fetch
// ####################################################################################################

reducer[ApiCurrencyRateAT.GET] = (state: State): State => {
  return {
    ...state,
    isLoading: true,
    errors: undefined
  };
};

// ####################################################################################################
// ~~~~~~ currency response ok
// ####################################################################################################

reducer[EpicApiCurrencyRateMT.OK] = (
  state: State,
  { payload }: ReturnType<typeof EpicApiCurrencyRateMC.ok>
): State => {
  return {
    ...state,
    currencyRates: payload,
    isLoading: false
  };
};

// ####################################################################################################
// ~~~~~~ currency response error
// ####################################################################################################

reducer[EpicApiCurrencyRateMT.ERROR] = (
  state: State,
  { payload }: ReturnType<typeof EpicApiCurrencyRateMC.error>
): State => {
  return {
    ...state,
    errors: payload.errors,
    isLoading: false
  };
};

// ~~~~~~

export const currencyReducer = dynReducer(currencyRateInitState, reducer);
