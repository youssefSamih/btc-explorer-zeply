import { config } from '@/config';
import { HttpVerbs } from '@/constants/http';

const { Api } = config;

const getPath = (path: string) => `${Api.URI}/${path}`;

// ####################################################################################################
// ~~~~~~ Public
// ####################################################################################################

// ~~~~~~ Transaction Search

const TransactionInfo = {
  Get: {
    Method: HttpVerbs.GET,
    getUrl: (search: string) => getPath(`transaction/${search}`)
  }
};

export const ApiRoutes = {
  TransactionInfo
} as const;
