import React from 'react';
import { ScrollPage, TranslucentBordered } from '../shared';
import ProjectItem from './ProjectItem/ProjectItem';
import projects from './projectList';
import { Content } from '../shared';

interface ProjectsProps {
  visible: boolean;
}

const Projects = React.forwardRef<HTMLDivElement, ProjectsProps>(({ visible }, ref) => {
  return (
    <Content visible={visible} ref={ref} className="fades">
      <div className="pagecontent">
        <ScrollPage>
          <TranslucentBordered>
            {projects.map((project) => (
              <ProjectItem project={project} />
            ))}
          </TranslucentBordered>
        </ScrollPage>
      </div>
    </Content>
  )
});

export default Projects;