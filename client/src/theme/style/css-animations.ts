import { css, keyframes } from 'styled-components';

export const KFSpinner = keyframes`
  to { transform: rotate(360deg) }
`;

const Type = {
  Linear: 'linear'
} as const;

const Animation = {
  spinner: css`
    animation: ${KFSpinner} 0.6s ${Type.Linear} infinite;
  `
};

export const CSSAnimation = {
  Animation
};
