import { genFieldMR } from '@/utils/store';

const prefix = 'at-api-transaction-info';

// ~~~~~~ Action Types

export const ApiTransactionInfoAT = {
  GET: `${prefix}-get`,
  SET_NOTIFICATION: `${prefix}-SET_NOTIFICATION`
} as const;

// ~~~~~~ Action Mutators

export const ApiTransactionInfoAC = {
  start: () => ({
    type: ApiTransactionInfoAT.GET
  }),
  setNotification: (notification: string) => ({
    type: ApiTransactionInfoAT.SET_NOTIFICATION,
    payload: notification
  })
} as const;

// ~~~~~~

export const TransactionFieldMR = {
  search: genFieldMR(prefix, 'search')
};
