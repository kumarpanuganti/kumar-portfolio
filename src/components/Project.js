import React from "react";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  return (
    <div className="mywork-comp-project mb-5">
      <motion.div
        className="mywork-comp-project-content"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      >
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
      </motion.div>
      <motion.div
        className="mywork-comp-project-image"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      >
        <div className="mywork-comp-project-image-cont">
          <img src={project.image} alt={`${project.title} screenshot`} />
        </div>
        <div className="mywork-comp-project-image-link">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            <h2>{project.title}</h2>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
