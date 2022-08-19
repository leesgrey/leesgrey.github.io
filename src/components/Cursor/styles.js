import styled from 'styled-components';

const Tail = styled.div`
  position: absolute;
  background-color: white;
  z-index: 102;
  pointer-events: none;
    -webkit-touch-callout: none;
  user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
  mix-blend-mode: exclusion;
  transition-timing-function: ease-out;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const OuterTail = styled(Tail)`
  top: 95px;
  left: 85px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
`

export const InnerTail = styled(Tail)`
  top: 100px;
  left: 90px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
`