export type ApiRes<T = undefined> = {
  status: number;
  response: T;
  xhr?: XMLHttpRequest;
};

export type ApiResError = {
  error: string;
  message: string;
};
