import React from "react";
import MyPic from "../Images/MyPic.jpeg";

const Project = ({ project }) => {
  return (
    <div className="mywork-comp-project mb-5">
      <div className="mywork-comp-project-content">
        <div>
          <h3>{project.title}</h3>
          <p className="mb-4">{project.description}</p>
        </div>
        <div>
          <h3 className="mb-3">Tools & Technologies</h3>
          <div className="techn">
            {project.technologies.map((tech, index) => (
              <h6 key={index}>{tech}</h6>
            ))}
          </div>
        </div>
      </div>
      <div className="mywork-comp-project-image">
        <div className="mywork-comp-project-image-cont">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSQ7N8BhIEZf6iQkL9BDT8CjTfy1kseXluA&s"
            alt={`${project.title} screenshot`}
          />
        </div>
        <div className="text-center">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
