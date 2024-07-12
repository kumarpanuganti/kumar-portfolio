import React from "react";
import { motion } from "framer-motion";

const Aboutme = () => {
  const educationItems = [
    {
      icon: "https://static.thenounproject.com/png/4084301-200.png",
      text: "Graduated with a Secondary School Certificate from Christ the King High School.",
    },
    {
      icon: "https://static.thenounproject.com/png/4084301-200.png",
      text: "Completed Intermediate studies at Sri Gayatri Junior College.",
    },
    {
      icon: "https://static.thenounproject.com/png/4084301-200.png",
      text: "Earned a Bachelor of Technology degree from Vignan Institute of Technology and Science.",
    },
    {
      icon: "https://static.thenounproject.com/png/4084301-200.png",
      text: "Joined NextWave Institute to further enhance skills in frontend technologies and basics of backend using Node.js and Express.",
    },
    {
      icon: "https://static.thenounproject.com/png/4084301-200.png",
      text: "Achieved certifications for completing courses on static and dynamic website development.",
    },
    {
      icon: "https://static.thenounproject.com/png/4084301-200.png",
      text: "Built numerous static websites independently during the course.",
    },
    {
      icon: "https://static.thenounproject.com/png/4084301-200.png",
      text: "Participated in a 30-day coding challenge, sharing daily progress and solutions on LinkedIn.",
    },
    {
      icon: "https://static.thenounproject.com/png/4084301-200.png",
      text: "Gained proficiency in Python through the institute's training program and personal projects.",
    },
  ];

  const workExperienceItems = [
    {
      icon: "https://static.thenounproject.com/png/4084301-200.png",
      text: "Worked as a React.js Developer at Avtrix Software Solutions, where I collaborated with a team to develop scalable and efficient web applications.",
    },
    {
      icon: "https://static.thenounproject.com/png/4084301-200.png",
      text: "Collaborated closely with backend developers to integrate frontend interfaces with backend systems.",
    },
    {
      icon: "https://static.thenounproject.com/png/4084301-200.png",
      text: "Designed and implemented user-friendly interfaces for multiple static websites, focusing on performance and responsiveness.",
    },
    {
      icon: "https://static.thenounproject.com/png/4084301-200.png",
      text: "Contributed to the frontend development of an e-commerce website, focusing on product listing pages and user checkout flows.",
    },
    {
      icon: "https://static.thenounproject.com/png/4084301-200.png",
      text: "Assisted in the integration of payment gateways, ensuring secure and seamless transactions.",
    },
  ];
  return (
    <div className="about-me">
      <div className="container">
        <div className="about-me-content">
          <motion.div
            className="mb-5"
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 1 }}
          >
            <h1>Education</h1>
            {educationItems.map((item, index) => (
              <motion.div
                className="about-me-content-pnt"
                initial={{
                  x: index % 2 === 0 ? "-100vw" : "100vw",
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  delay: 0.2 * index,
                  duration: 1,
                }}
                key={index}
              >
                <img src={item.icon} alt="icon" />
                <h5>{item.text}</h5>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 1,
              delay: 1,
            }}
          >
            <h1>Work Experience</h1>
            {workExperienceItems.map((item, index) => (
              <motion.div
                className="about-me-content-pnt"
                initial={{
                  x: index % 2 === 0 ? "-100vw" : "100vw",
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  delay: 1 + 0.2 * index,
                  duration: 1,
                }}
                key={index}
              >
                <img src={item.icon} alt="icon" />
                <h5>{item.text}</h5>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
