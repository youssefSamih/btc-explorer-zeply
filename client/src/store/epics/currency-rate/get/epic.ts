import { ofType, StateObservable } from 'redux-observable';
import { exhaustMap, map, Observable } from 'rxjs';

import {
  ApiCurrencyRateAC,
  ApiCurrencyRateAT
} from '@/store/actions/currency-rate/action';
import { ApiUtils } from '@/store/epics/utils';
import { apiCurrencyRate$ } from '@/services/currency-rate/get';
import { StoreState } from '@/store/reducers';
import { EpicApiCurrencyRateMC } from './mutators';

type Action = ReturnType<typeof ApiCurrencyRateAC.start>;

export const apiCurrencyRateGetEpic$ = (
  action$: Observable<Action>,
  state$: StateObservable<StoreState>
) =>
  action$.pipe(
    ofType(ApiCurrencyRateAT.GET),
    exhaustMap(() => apiCurrencyRate$()),
    map((res) =>
      ApiUtils.isNotError(res)
        ? EpicApiCurrencyRateMC.ok(res.response)
        : EpicApiCurrencyRateMC.error(res.response)
    )
  );
