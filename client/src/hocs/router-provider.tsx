import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { getDisplayName } from '@/utils/misc';

function createComponent<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithRouterProvider = (props: P) => {
    return (
      <BrowserRouter>
        <WrappedComponent {...props} />
      </BrowserRouter>
    );
  };

  WithRouterProvider.displayName = `WithRouterProvider(${getDisplayName(
    WrappedComponent
  )})`;

  return WithRouterProvider;
}

export const withRouterProvider = <P extends object>(
  component: React.ComponentType<P>
) => createComponent(component);
