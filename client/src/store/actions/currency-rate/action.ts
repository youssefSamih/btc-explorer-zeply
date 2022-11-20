import { genFieldMR } from '@/utils/store';

const prefix = 'at-api-currency-rate';

// ~~~~~~ Action Types

export const ApiCurrencyRateAT = {
  GET: `${prefix}-get`
} as const;

// ~~~~~~ Action Mutators

export const ApiCurrencyRateAC = {
  start: () => ({
    type: ApiCurrencyRateAT.GET
  })
} as const;

// ~~~~~~

export const CurrencyFieldMR = {
  currency: genFieldMR(prefix, 'currency')
};
