import dotenv from 'dotenv';

const dataEnv = dotenv.config({
  path: `${__dirname}/../.env`
});

type env = string | undefined;

type ENV = {
  PORT: env;
  CORS_ORIGIN: env;
  BLOCK_CHAIN_INFO_API_URI: env;
  CURRENCY_BTC_RATE_API_URI: env;
};

const environmentVariable = (dataEnv.parsed || {}) as ENV;

export const config = {
  corsOrigin: environmentVariable.CORS_ORIGIN,
  port: environmentVariable.PORT,
  apiUrl: environmentVariable.BLOCK_CHAIN_INFO_API_URI,
  currencyRateApiUri: environmentVariable.CURRENCY_BTC_RATE_API_URI
};
