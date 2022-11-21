import React from 'react';

import { Loader } from '@/components';

type TLogos = 'logos/main-logo';
type TIcons =
  | 'icons/notification'
  | 'icons/transactions'
  | 'icons/search-address'
  | 'icons/search'
  | 'icons/left-arrow'
  | 'icons/right-arrow';

type Icons = TLogos | TIcons;

// Component generator

export const LazySVG = (icons: Icons) => {
  const IconSVG: React.LazyExoticComponent<React.FunctionComponent<any>> =
    React.lazy(() =>
      import(`@/components/imgs/${icons}/component`).catch(() => {
        console.warn(`lazy-svg can not load icon "${icons}"`);
        return { default: () => <div /> };
      })
    );

  // ~~~~~~ Component

  return (props: { size: number; [key: string]: any }): JSX.Element => {
    const { size, ...restProps } = props;

    return (
      <React.Suspense fallback={<Loader size={size} />}>
        <IconSVG {...restProps} />
      </React.Suspense>
    );
  };
};
