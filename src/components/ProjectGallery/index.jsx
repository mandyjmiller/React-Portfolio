import React from 'react';
import ProjectCard from '../Project'; // Import ProjectCard component

const ProjectGallery = ({ projects }) => {
  return (
    <div className="project-library">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGallery;
;


