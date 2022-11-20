import { catchError, map, Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { ApiRes, ApiResError } from '@/services/types';
import { ApiRoutes } from './routes';

const { TransactionInfo } = ApiRoutes;

// ####################################################################################################
// ~~~~~~ TransactionInfo
// ####################################################################################################

export type TransactionInfoApiGetRes = {
  data: {
    block_height: number;
    block_hash: string;
    block_time: number;
    created_at: number;
    confirmations: number;
    fee: number;
    hash: string;
    inputs_count: number;
    inputs_value: number;
    is_coinbase: boolean;
    is_double_spend: boolean;
    is_sw_tx: boolean;
    lock_time: number;
    outputs_count: number;
    outputs_value: number;
    sigops: number;
    size: number;
    version: number;
    vsize: number;
    weight: number;
    witness_hash: string;
  };
  err_code: number;
  err_no: number;
  message: string;
  status: string;
};

export const apiTransactionInfo$ = (search: string) => {
  return ajax<TransactionInfoApiGetRes>({
    method: TransactionInfo.Get.Method,
    url: TransactionInfo.Get.getUrl(search)
  }).pipe(
    map((res): ApiRes<TransactionInfoApiGetRes> => {
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
