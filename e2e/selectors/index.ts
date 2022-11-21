import { memoMultiSelOfObjKeys, sel } from '../utils/misc';

const searchBarSel = sel('search-bar');
const addressSel = sel('address-overview');
const transactionSel = sel('transaction-overview');

const { inSearchBar } = memoMultiSelOfObjKeys({
  searchBar: searchBarSel
}) as any;

const searchSelectors = {
  sel: searchBarSel,

  searchInput: inSearchBar(sel('search-input')),
  submitSearch: inSearchBar(sel('submit-search'))
} as const;

const addressSelectors = {
  sel: addressSel
} as const;

const transactionSelectors = {
  sel: transactionSel
} as const;

export const Selectors = {
  searchSelectors,
  addressSelectors,
  transactionSelectors
};
