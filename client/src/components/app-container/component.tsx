import React from 'react';
import Scrollbars from 'react-custom-scrollbars';

import { Card } from '@/components';
import { STAppContainer } from './style';

// ~~~~~~ Types

type Props = {
  children: React.ReactNode;
};

// ~~~~~~ Component

export const AppContainer = ({ children }: Props) => {
  // ~~~~~~ Render

  return (
    <STAppContainer>
      <Scrollbars className="scrollbar">
        <Card>{children}</Card>
      </Scrollbars>
    </STAppContainer>
  );
};
