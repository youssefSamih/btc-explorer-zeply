import { catchError, map, Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { ApiRes, ApiResError } from '@/services/types';
import { ApiRoutes } from './routes';

const { CurrencyInfo } = ApiRoutes;

// ####################################################################################################
// ~~~~~~ currency rates
// ####################################################################################################

export type CurrencyRateApiGetRes = {
  date: any;
  [key: string]: {
    [key: string]: number;
  };
};

export const apiCurrencyRate$ = () => {
  return ajax<CurrencyRateApiGetRes>({
    method: CurrencyInfo.Get.Method,
    url: CurrencyInfo.Get.getUrl
  }).pipe(
    map((res): ApiRes<CurrencyRateApiGetRes> => {
      return {
        status: res.status,
        response: res.response
      };
    }),
    catchError((res: ApiRes<ApiResError>): Observable<ApiRes<ApiResError>> => {
      return of({
        status: res.status,
        response: res.response
      });
    })
  );
};
