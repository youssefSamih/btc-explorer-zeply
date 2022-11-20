export type ApiRes<T = undefined> = {
  status: number;
  response: T;
  xhr?: XMLHttpRequest;
};

export type ApiResError = {
  data: {
    err_code: string;
    message: string;
  };
};
