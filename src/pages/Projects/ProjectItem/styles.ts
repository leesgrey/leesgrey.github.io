import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  width: 100%;
`
export const ProjectName = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  text-transform: uppercase;
  color: #fff;
  font-size: 2em;
  border-bottom: 1px solid #fff;
  display: inline-block;
  padding: 0 3rem;
  margin: 0 auto 1rem;
`;

export const ProjectImage = styled.img`
  max-width: 50rem;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  max-height: 25rem;
`;

export const InfoBar = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  display: flex;
  padding: 0.5rem;
  margin: 0 1rem 2rem;
`;

export const LinkIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  vertical-align: middle;
`;

export const ProjectLink = styled.li`
`;

export const Links = styled.ul`
  border-left: 1px solid white;
  flex: 0 1 auto;
  padding: 0 1rem;
  margin: 0;
  text-align: left;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Tools = styled.div`
  justify-content: center;
  flex: 1 0 auto;
  align-items: center;
  display: flex;
`;

export const LinkText = styled.p`
  display: inline;
  vertical-align: middle;
`