import React from 'react';
import { IntlProvider } from 'react-intl';

import { getBrowserLang } from '@/utils/lang';
import { getDisplayName } from '@/utils/misc';

// ~~~~~~ HOC

function createComponent<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithIntlProvider = (props: P) => {
    // ~~~~~~

    return (
      <IntlProvider locale={getBrowserLang()}>
        <WrappedComponent {...props} />
      </IntlProvider>
    );
  };

  WithIntlProvider.displayName = `WithIntlProvider(${getDisplayName(
    WrappedComponent
  )})`;

  return WithIntlProvider;
}

// ~~~~~~

export const withIntlProvider = <P extends object>(
  component: React.ComponentType<P>
) => createComponent(component);
