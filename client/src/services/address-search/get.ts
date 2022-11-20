import { catchError, map, Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { ApiRes, ApiResError } from '@/services/types';
import { ApiRoutes } from './routes';

const { AddressInfo } = ApiRoutes;

// ####################################################################################################
// ~~~~~~ AddressInfo
// ####################################################################################################

export type AddressInfoApiGetRes = {
  data: {
    address: string;
    received: number;
    sent: number;
    balance: number;
    tx_count: number;
    unconfirmed_tx_count: number;
    unconfirmed_received: number;
    unconfirmed_sent: number;
    unspent_tx_count: number;
    first_tx: string;
    last_tx: string;
  };
  err_code: number;
  err_no: number;
  message: string;
  status: string;
};

export const apiAddressInfo$ = (search: string) => {
  return ajax<AddressInfoApiGetRes>({
    method: AddressInfo.Get.Method,
    url: AddressInfo.Get.getUrl(search)
  }).pipe(
    map((res): ApiRes<AddressInfoApiGetRes> => {
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
