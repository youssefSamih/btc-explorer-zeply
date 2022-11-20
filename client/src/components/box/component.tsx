import React from 'react';

import { STBox } from './style';

// ~~~~~~ Types

type Props = {
  children: React.ReactNode;
};

// ~~~~~~ Component

export const Box = ({ children }: Props) => {
  // ~~~~~~ Render

  return <STBox>{children}</STBox>;
};
