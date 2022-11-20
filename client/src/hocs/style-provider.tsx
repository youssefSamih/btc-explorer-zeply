import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AppTheme } from '@/theme/style';
import { GlobalStyle } from '@/theme/global-style';
import { getDisplayName } from '@/utils/misc';

// ~~~~~~ HOC

function createComponent<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithThemeProvider = (props: P) => {
    return (
      <ThemeProvider theme={AppTheme}>
        <GlobalStyle />
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };

  WithThemeProvider.displayName = `WithThemeProvider(${getDisplayName(
    WrappedComponent
  )})`;

  return WithThemeProvider;
}

// ~~~~~~

export const withThemeProvider = <P extends object>(
  component: React.ComponentType<P>
) => createComponent(component);
