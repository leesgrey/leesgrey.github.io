import { css, keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const cssFadeIn = () => css`
  ${fadeIn} 1s forwards;
`;