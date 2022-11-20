import { config } from '@/config';
import { HttpVerbs } from '@/constants/http';

const { Api } = config;

const getPath = (path: string) => `${Api.URI}/${path}`;

// ####################################################################################################
// ~~~~~~ Public
// ####################################################################################################

// ~~~~~~ Currency Search

const CurrencyInfo = {
  Get: {
    Method: HttpVerbs.GET,
    getUrl: getPath('currency-rate')
  }
};

export const ApiRoutes = {
  CurrencyInfo
} as const;
