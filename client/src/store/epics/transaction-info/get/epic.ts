import { ofType, StateObservable } from 'redux-observable';
import { map, mergeMap, Observable } from 'rxjs';

import {
  ApiTransactionInfoAC,
  ApiTransactionInfoAT
} from '@/store/actions/transaction-info/action';
import { ApiUtils } from '@/store/epics/utils';
import type { StoreState } from '@/store/reducers';
import { apiTransactionInfo$ } from '@/services/transactions-search/get';
import { EpicApiTransactionInfoMC } from './mutators';

type Action = ReturnType<typeof ApiTransactionInfoAC.start>;

export const apiTransactionInfoGetEpic$ = (
  action$: Observable<Action>,
  state$: StateObservable<StoreState>
) =>
  action$.pipe(
    ofType(ApiTransactionInfoAT.GET),
    mergeMap(() => apiTransactionInfo$(state$.value.transaction.search)),
    map((res) =>
      ApiUtils.isNotError(res)
        ? EpicApiTransactionInfoMC.ok(res.response)
        : EpicApiTransactionInfoMC.error(res.response)
    )
  );
