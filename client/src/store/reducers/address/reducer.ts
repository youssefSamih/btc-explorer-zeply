import { AddressFieldMR } from '@/store/actions/address-info/action';
import { ApiAddressInfoAT } from '@/store/actions/address-info/action';
import {
  EpicApiAddressInfoMC,
  EpicApiAddressInfoMT
} from '@/store/epics/address-info/get/mutators';
import { dynReducer } from '@/utils/store';
import type { StoreState } from '@/store/reducers';

type State = StoreState['address'];

export const addressInitState = {
  search: '',
  isLoading: false
};

const reducer: any = {
  ...AddressFieldMR.search.Reducer
};

// ####################################################################################################
// ~~~~~~ address start search
// ####################################################################################################

reducer[ApiAddressInfoAT.GET] = (state: State): State => {
  return {
    ...state,
    isLoading: true,
    errors: undefined
  };
};

// ####################################################################################################
// ~~~~~~ address search response ok
// ####################################################################################################

reducer[EpicApiAddressInfoMT.OK] = (
  state: State,
  { payload }: ReturnType<typeof EpicApiAddressInfoMC.ok>
): State => {
  return {
    ...state,
    addressSearch: payload,
    isLoading: false
  };
};

// ####################################################################################################
// ~~~~~~ address search response error
// ####################################################################################################

reducer[EpicApiAddressInfoMT.ERROR] = (
  state: State,
  { payload }: ReturnType<typeof EpicApiAddressInfoMC.error>
): State => {
  return {
    ...state,
    errors: payload.errors,
    isLoading: false
  };
};

// ~~~~~~

export const addressReducer = dynReducer(addressInitState, reducer);
