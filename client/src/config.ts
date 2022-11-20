const env = process.env as ENV;

export const config = {
  Api: {
    URI: env.REACT_APP_API_URI || 'react-app-api-uri-not-defined'
  }
};
