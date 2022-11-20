import type { AddressInfoApiGetRes } from '@/services/address-search/get';
import type { ApiResError } from '@/services/types';

const prefix = 'mt-address-info-epic';

// ~~~~~~ Mutators Types

export const EpicApiAddressInfoMT = {
  OK: `${prefix}-ok`,
  ERROR: `${prefix}-err`
} as const;

// ~~~~~~ Mutators Creators

export const EpicApiAddressInfoMC = {
  ok: (data: AddressInfoApiGetRes) => ({
    type: EpicApiAddressInfoMT.OK,
    payload: data
  }),

  error: (data: ApiResError) => ({
    type: EpicApiAddressInfoMT.ERROR,
    error: true,
    payload: {
      errors: data
    }
  })
} as const;
