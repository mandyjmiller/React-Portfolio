import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ProjectCard = ({ project }) => {
  const { id, title, image, deployment_link, github_link } = project;

  return (
    <div className="project-card">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>Deployed Version: <a href={deployment_link}>{deployment_link}</a></p>
      <p>GitHub Repository: <a href={github_link}>{github_link}</a></p>
      {/* Add GIF or screenshot here */}
      <Link to={`/projects/${id}`}>View Details</Link>
    </div>
  );
};

export default ProjectCard;

