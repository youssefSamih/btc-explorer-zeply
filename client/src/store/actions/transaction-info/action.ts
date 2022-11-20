import { genFieldMR } from '@/utils/store';

const prefix = 'at-api-transaction-info';

// ~~~~~~ Action Types

export const ApiTransactionInfoAT = {
  GET: `${prefix}-get`
} as const;

// ~~~~~~ Action Mutators

export const ApiTransactionInfoAC = {
  start: () => ({
    type: ApiTransactionInfoAT.GET
  })
} as const;

// ~~~~~~

export const TransactionFieldMR = {
  search: genFieldMR(prefix, 'search')
};
