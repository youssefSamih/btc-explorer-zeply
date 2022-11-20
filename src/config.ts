import dotenv from 'dotenv';

const dataEnv = dotenv.config({
  path: `${__dirname}/../.env`
});

type env = string | undefined;

type ENV = {
  PORT: env;
  CORS_ORIGIN: env;
  API_URI: env;
};

const environmentVariable = (dataEnv.parsed || {}) as ENV;

export const config = {
  corsOrigin: environmentVariable.CORS_ORIGIN,
  port: environmentVariable.PORT,
  apiUrl: environmentVariable.API_URI
};
