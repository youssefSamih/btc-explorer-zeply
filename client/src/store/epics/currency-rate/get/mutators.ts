import type { CurrencyRateApiGetRes } from '@/services/currency-rate/get';
import type { ApiResError } from '@/services/types';

const prefix = 'mt-currency-rate-epic';

// ~~~~~~ Mutators Types

export const EpicApiCurrencyRateMT = {
  OK: `${prefix}-ok`,
  ERROR: `${prefix}-err`
} as const;

// ~~~~~~ Mutators Creators

export const EpicApiCurrencyRateMC = {
  ok: (data: CurrencyRateApiGetRes) => ({
    type: EpicApiCurrencyRateMT.OK,
    payload: data
  }),

  error: (data: ApiResError) => ({
    type: EpicApiCurrencyRateMT.ERROR,
    error: true,
    payload: {
      errors: data
    }
  })
} as const;
