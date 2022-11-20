import { config } from '@/config';
import { HttpVerbs } from '@/constants/http';

const { Api } = config;

const getPath = (path: string) => `${Api.URI}/${path}`;

// ####################################################################################################
// ~~~~~~ Public
// ####################################################################################################

// ~~~~~~ Address Search

const AddressInfo = {
  Get: {
    Method: HttpVerbs.GET,
    getUrl: (search: string) => getPath(`address/${search}`)
  }
};

export const ApiRoutes = {
  AddressInfo
} as const;
