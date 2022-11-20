import { genFieldMR } from '@/utils/store';

const prefix = 'at-api-address-info';

// ~~~~~~ Action Types

export const ApiAddressInfoAT = {
  GET: `${prefix}-get`
} as const;

// ~~~~~~ Action Mutators

export const ApiAddressInfoAC = {
  start: () => ({
    type: ApiAddressInfoAT.GET
  })
} as const;

// ~~~~~~

export const AddressFieldMR = {
  search: genFieldMR(prefix, 'search')
};
