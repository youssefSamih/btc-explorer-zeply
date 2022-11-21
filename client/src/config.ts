const env = process.env as ENV;

export const config = {
  Api: {
    URI: env.REACT_APP_API_URI || 'react-app-api-uri-not-defined',
    WEBSOCKET:
      env.REACT_APP_WEBSOCKET_URI || 'react-app-websocket-uri-not-defined'
  }
};
