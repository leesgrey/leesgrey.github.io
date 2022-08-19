import styled, { keyframes } from 'styled-components';
import { cssFadeIn } from '../../styles';

export const LeftHalf = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  float: left;
  align-items: center;
  justify-content: flex-end;
`;

export const LeftContent = styled.div`
  display: block;
  text-align: right;
  padding-right: 2.5rem;
`;

export const Name = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  z-index: 2;
  transition: 2s color;
  letter-spacing: 0.08em;
  font-family: 'Ubuntu', Sans-Serif;
  text-transform: uppercase;
  font-size: 3.5rem;
  margin: 0;
  opacity: 0;
  animation: ${cssFadeIn};
`;
 
export const Tagline = styled.p`
  opacity: 0;
  animation: ${cssFadeIn};
  animation-delay: 0.5s;
  z-index: 9;
  margin: 0.75rem 0;
`;

export const RightHalf = styled.div`
  height: 100%;
  width: 35%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  opacity: 0;
  animation: ${cssFadeIn};
  animation-delay: 1s;
`;

const expand = keyframes`
  from {
    padding: 0px 2.5rem;
  }
  to {
    padding: 100px 2.5rem;
  }
`; 

export const Menu = styled.div`
  border-left: 1px solid #fff;
  font-family: 'Ubuntu', sans-serif;
  text-transform: uppercase;
  font-size: 1.3em;
  margin: 0;
  list-style-type: none;
  overflow-y: hidden;
  vertical-align: middle;
  animation: ${expand} 3.5s forwards;
  animation-delay: 0.9s;
`;

export const MenuItem = styled.li`
  margin: 0.5em 0;
`;
