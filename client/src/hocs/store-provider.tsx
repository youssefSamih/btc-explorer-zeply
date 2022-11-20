import React from 'react';

import { Provider } from 'react-redux';
import { getStore } from '@/store/store-config';
import { getDisplayName } from '@/utils/misc';

function createComponent<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithStoreProvider = (props: P) => {
    return (
      <Provider store={getStore()}>
        <WrappedComponent {...props} />
      </Provider>
    );
  };

  WithStoreProvider.displayName = `WithStoreProvider(${getDisplayName(
    WrappedComponent
  )})`;

  return WithStoreProvider;
}

export const withStoreProvider = <P extends object>(
  component: React.ComponentType<P>
) => createComponent(component);
