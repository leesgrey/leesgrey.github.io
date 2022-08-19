import styled from 'styled-components';

export const ScrollPage = styled.div`
  position: absolute;
  width: 60rem;
  height: calc(100vh - 12rem);
  padding: 1rem;
  overflow-y: scroll;
  scrollbar-width: none;
    -ms-overflow-style: none;
`;

export const TranslucentBordered = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  transition: transform 0.5s ease-in-out;
  outline: 0.0625rem solid #fff;
  outline-offset: -1rem;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 auto 10rem;
  align-content: flex-start;
  max-width: 100%;
`

export const Content = styled.div(({ visible } : { visible: boolean }) => `
  opacity: ${visible ? '1' : '0'};
  width: 100%;
  transition: 0.75s opacity;
  padding: 11.5rem 0;
`);