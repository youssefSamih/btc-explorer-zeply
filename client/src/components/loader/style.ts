import styled from 'styled-components';

import { CSSAnimation } from '@/theme/style/css-animations';

type STProps = {
  size: number;
  fill: string;
};

export const STLoader = styled.div<STProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    ${CSSAnimation.Animation.spinner};

    ${({ size }) => `width: ${size}px;`}
    ${({ size }) => `height: ${size}px;`}

    path#spinner-a {
      fill: transparent;
      stroke: transparent;
    }

    path#spinner-b {
      fill: ${(props) => props.fill};
      stroke: ${(props) => props.fill};
    }

    path#spinner-c {
      fill: transparent;
      stroke: transparent;
    }
  }
`;
