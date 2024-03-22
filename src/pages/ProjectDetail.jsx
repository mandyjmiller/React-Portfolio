import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = ({ projects }) => {
  // Get the project ID from the URL
  const { projectId } = useParams();

  // Find the project with the matching ID
  const project = projects.find(project => project.id === parseInt(projectId));

  // If project is not found, display a message or handle appropriately
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>Deployed Version: <a href={project.deployment_link}>{project.deployment_link}</a></p>
      <p>GitHub Repository: <a href={project.github_link}>{project.github_link}</a></p>
      {/* Add GIF or screenshot here */}
      {/* Other details about the project */}
    </div>
  );
};

export default ProjectDetail;
