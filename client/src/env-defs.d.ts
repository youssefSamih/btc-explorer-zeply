type env = string | undefined;

type ENV = typeof process.env & {
  REACT_APP_API_URI: env;
};
