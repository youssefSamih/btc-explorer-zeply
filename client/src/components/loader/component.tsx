import React from 'react';
import { useTheme } from 'styled-components';

import { ReactComponent as LoaderSVG } from '@/assets/spinner.svg';
import { STLoader } from './style';

// ~~~~~~ Types

interface Props {
  size: number;
  color?: string;
}

// ~~~~~~ Component

export const Loader: React.FC<Props> = ({ size, color }) => {
  // ~~~~~~ Hooks

  const theme = useTheme();

  // ~~~~~~ Render

  return (
    <STLoader size={size} fill={color || theme.colors.DarkCerulean}>
      <LoaderSVG />
    </STLoader>
  );
};
