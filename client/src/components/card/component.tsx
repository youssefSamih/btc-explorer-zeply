import React from 'react';

import { STCard } from './style';

// ~~~~~~ Types

type Props = {
  children: React.ReactNode;
};

// ~~~~~~ Component

export const Card = ({ children }: Props) => {
  // ~~~~~~ Render

  return <STCard>{children}</STCard>;
};
