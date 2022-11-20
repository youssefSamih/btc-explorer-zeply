import type { TransactionInfoApiGetRes } from '@/services/transactions-search/get';
import type { ApiResError } from '@/services/types';

const prefix = 'mt-transaction-info-epic';

// ~~~~~~ Mutators Types

export const EpicApiTransactionInfoMT = {
  OK: `${prefix}-ok`,
  ERROR: `${prefix}-err`
} as const;

// ~~~~~~ Mutators Creators

export const EpicApiTransactionInfoMC = {
  ok: (data: TransactionInfoApiGetRes) => ({
    type: EpicApiTransactionInfoMT.OK,
    payload: data
  }),

  error: (data: ApiResError) => ({
    type: EpicApiTransactionInfoMT.ERROR,
    error: true,
    payload: {
      errors: data
    }
  })
} as const;
