import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    ${({ theme }) => theme.fonts.fontsFamily}

    color: ${({ theme }) => theme.colors.RiverBed};

    background-color: ${({ theme }) => theme.colors.AquaHaze};

    overflow: hidden;
  }
`;
