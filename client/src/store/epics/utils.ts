import type { ApiRes, ApiResError } from '@/services/types';

type StatusOnly = { status: number };

// Basic status error
const isErrorResponse = (res: StatusOnly) =>
  res?.status === undefined || res?.status === 0 || res?.status >= 400;

const isNotError = <T>(
  res: ApiRes<T> | ApiRes<ApiResError>
): res is ApiRes<T> => res?.status !== 0 && !isErrorResponse(res);

const isError = <T>(
  res: ApiRes<T> | ApiRes<ApiResError>
): res is ApiRes<ApiResError> => !isNotError(res);

export const ApiUtils = {
  isNotError,
  isError
};
