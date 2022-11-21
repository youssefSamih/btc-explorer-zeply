import styled from 'styled-components';

import { MediaQuery } from './constants/media-queries';

export const STApp = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${MediaQuery.MaxWidthSmall}) {
    .scrollbar {
      margin-left: 60px;
    }
  }
`;

export const STNotificationContainer = styled.div`
  position: absolute;

  height: 100vh;
  width: 100%;
`;
