import React from 'react';
import { ProjectWrapper, ProjectName, ProjectImage, LinkText, Tools, ProjectLink, InfoBar, Links, LinkIcon } from './styles';
import github from '../../../assets/github.png';
import globe from '../../../assets/globe.png';
import tool from '../../../assets/tool.png';

interface Project {
  name: string;
  description: string;
  image?: string;
  link?: string;
  code?: string;
  tools: string[];
}

const ProjectItem = ({ project } : { project: Project }) => {
  const getToolString = (tools: string[]) => {
    let toolsStr = '';
    tools.forEach((tool) => {
      toolsStr += `${tool}, `;
    })
    return toolsStr.slice(0, -2);
  };

  return (
    <ProjectWrapper>
      <ProjectName>{project.name}</ProjectName>
      <ProjectImage src={project.image} />
      <p>{project.description}</p>
      <InfoBar>
        <Tools>
          <LinkIcon src={tool} />
          <LinkText>{getToolString(project.tools)}</LinkText>
        </Tools>
        <Links>
          {project.link && <li>
            <a href={project.link} target="_blank">
              <LinkIcon src={globe} />
              <LinkText>demo</LinkText>
            </a>
          </li>}
          {project.code && <li>
            <a href={project.code} target="_blank">
              <LinkIcon src={github} />
              <LinkText>code</LinkText>
            </a>
          </li>}
        </Links>
      </InfoBar>
    </ProjectWrapper>

  );
}

export default ProjectItem;