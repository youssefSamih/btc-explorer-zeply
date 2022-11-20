import { combineEpics } from 'redux-observable';

import { apiAddressInfoGetEpic$ } from './address-info/get/epic';
import { apiTransactionInfoGetEpic$ } from './transaction-info/get/epic';

export default combineEpics(
  apiAddressInfoGetEpic$ as any,
  apiTransactionInfoGetEpic$ as any
);
