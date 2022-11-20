import '@/theme/fonts.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { compose } from 'redux';

import App from './app';
import { withIntlProvider } from './hocs/intl-provider';
import { withRouterProvider } from './hocs/router-provider';
import { withStoreProvider } from './hocs/store-provider';
import { withThemeProvider } from './hocs/style-provider';

const ProvidedApp = compose<typeof App>(
  withThemeProvider,
  withIntlProvider,
  withRouterProvider,
  withStoreProvider
)(App);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProvidedApp />
  </React.StrictMode>
);
