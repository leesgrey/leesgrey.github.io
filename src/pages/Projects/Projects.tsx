import React from 'react';
import { ScrollPage, TranslucentBordered } from '../shared';
import ProjectItem from './ProjectItem/ProjectItem';
import projects from './projectList';

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="projects" ref={ref} className="content fades">
      <div className="pagecontent">
        <ScrollPage>
          <TranslucentBordered>
            {projects.map((project) => (
              <ProjectItem project={project} />
            ))}
          </TranslucentBordered>
        </ScrollPage>
      </div>
    </div>
  )
});

export default Projects;