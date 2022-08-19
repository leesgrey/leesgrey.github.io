import styled from 'styled-components';

const Tail = styled.div`
  pointer-events: none;
    -webkit-touch-callout: none;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 50%;
  z-index: 102;
  user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
  mix-blend-mode: exclusion;
  transition-timing-function: ease-out;
`

export const OuterTail = styled(Tail)`
  top: 7rem;
  left: 9rem;
  width: 20px;
  transition: width 100ms linear, height 100ms linear, top 150ms, left 150ms;
`
export const InnerTail = styled(Tail)`
  top: 7rem;
  left: 9rem;
  width: 10px;
  height: 10px;
`;
