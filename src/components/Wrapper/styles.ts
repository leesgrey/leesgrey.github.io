import styled, { css } from 'styled-components';
import { cssFadeIn } from '../../styles';

export const ArrowContainer = styled.div`
  position: fixed;
  z-index: 5;
  bottom : 15px;
  right: 25px;
  opacity: 0;
  animation: ${cssFadeIn};
  animation-delay: 1s;
`;

const Arrow = styled.img(({ active } : { active?: boolean }) => `
  height: 5em;
  position: fixed;
  top: 45%;
  vertical-align: middle;
  animation-delay: 1s;
  mix-blend-mode: exclusion;
  opacity: 1;
  ${!active && 'opacity: 0;'}
  transition: opacity 1s;
`);

export const LeftArrow = styled(Arrow)`
  left: 4rem;
  transition: filter 0.25s ease-out, left 0.25s ease-out, opacity 0.25s ease-out;

  &:hover {
    filter: drop-shadow(10px 0px 0px rgba(255, 255, 255, 0.3)) drop-shadow(10px 0px 0px rgba(255, 255, 255, 0.3));
    -webkit-filter: drop-shadow(10px 0px 0px rgba(255, 255, 255, 0.3)) drop-shadow(10px 0px 0px rgba(255, 255, 255, 0.3));
    left: 3.5rem;
  }
`;

export const RightArrow = styled(Arrow)`
  right: 4rem;
  transition: filter 0.25s ease-out, left 0.25s ease-out, opacity 0.25s ease-out;

  &:hover {
    filter: drop-shadow(-10px 0px 0px rgba(255, 255, 255, 0.3)) drop-shadow(-10px 0px 0px rgba(255, 255, 255, 0.3));
    -webkit-filter: drop-shadow(-10px 0px 0px rgba(255, 255, 255, 0.3)) drop-shadow(-10px 0px 0px rgba(255, 255, 255, 0.3));
    right: 3.5rem;
  }
`;

export const Moon = styled.div`
  text-align: center;
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
  background-color: white;
  position: fixed;
  top: 2rem;
  left: 4rem;
  mix-blend-mode: exclusion;
  z-index: 100;
  opacity: 0;
  animation: ${cssFadeIn};
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    color: rgb(9,10,25);
  }
`;

export const Mountain = styled.img(({ left } :  { left: number }) => css`
  position: fixed;
  left: calc(-10rem - ${left}rem);
  height: 80vh;
  bottom: -2rem;
  transition: left 0.5s;
  opacity: 0;
  animation: ${cssFadeIn};
  animation-delay: 1s;
  pointer-events: none;
`);

export const ScrollWrapper = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  width: 400vw;
  bottom: 0;
  height: 100%;
`;

export const Header = styled.div`
  opacity: 1;
  z-index: 99;
  position: fixed;
  width: 100%;
  height: 11rem;
  text-align: bottom;
  box-sizing: border-box;
`;

export const PageTitle = styled.h1(({ invis } : { invis: boolean }) =>`
  font-size: 5rem;
  color: #DFF2FA;
  font-family: 'Ubuntu', Sans-Serif;
  text-transform: uppercase;
  display: inline-block;
  position: absolute;
  bottom: 0;
  margin: 0 10rem;
  opacity: ${invis ? '0' : '1'};
  transition: opacity 0.3s;
`);

export const PageMenu = styled.ul`
  font-family: 'Ubuntu', sans-serif;
  text-transform: uppercase;
  font-size: 1.1em;
  list-style-type: none;
  position: absolute;
  bottom: 0;
  right: 10rem;
  opacity: 0;
  animation: ${cssFadeIn};
  animation-delay: 1s;
`

export const MenuItem = styled.li`
  display: inline-block;
  margin: 0 20px;
  font-size: 1.25rem;
`;
