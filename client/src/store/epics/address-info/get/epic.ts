import { ofType, StateObservable } from 'redux-observable';
import { map, mergeMap, Observable } from 'rxjs';

import {
  ApiAddressInfoAC,
  ApiAddressInfoAT
} from '@/store/actions/address-info/action';
import { apiAddressInfo$ } from '@/services/address-search/get';
import { ApiUtils } from '@/store/epics/utils';
import type { StoreState } from '@/store/reducers';
import { EpicApiAddressInfoMC } from './mutators';

type Action = ReturnType<typeof ApiAddressInfoAC.start>;

export const apiAddressInfoGetEpic$ = (
  action$: Observable<Action>,
  state$: StateObservable<StoreState>
) =>
  action$.pipe(
    ofType(ApiAddressInfoAT.GET),
    mergeMap(() => apiAddressInfo$(state$.value.address.search)),
    map((res) =>
      ApiUtils.isNotError(res)
        ? EpicApiAddressInfoMC.ok(res.response)
        : EpicApiAddressInfoMC.error(res.response)
    )
  );
