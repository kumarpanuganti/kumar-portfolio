import React from "react";
import Project from "./Project";
import Avtrix from "../Images/Avtrix.png"
import Kiwiglide from "../Images/Kiwiglide.png"
import ByteBazaar from "../Images/ByteBazar.png"

const MyWork = () => {
  const projects = [
    {
      title: "KIWIGLIDE",
      description:
        "Collaborated with the Project Management Team to conduct comprehensive research and design for Kiwiglide, a proprietary solution for a New Zealand-based client. Utilizing React JS, the application features an Invoice Generator, Quotation Generator, Employee Management System, and Payroll Processing Tool. The project also includes both admin and super admin panels, enhancing the overall functionality and user experience. Additionally, the software ensures robust security measures and user-friendly interfaces, leading to increased productivity and streamlined operations.",
      image: Kiwiglide,
      technologies: ["HTML", "CSS", "JS", "REACT"],
      demoLink: "http://kiwiglide.co.nz/",
    },
    {
      title: "ByteBazaar (E-Commerce)",
      description:
        "Designed and developed a New Zealand-based e-commerce platform, yteBazaar, leveraging React.js for the frontend. Focused on enhancing user satisfaction, the project involved seamless integration of various functionalities to improve the online shopping experience. Implemented advanced search features, secure payment gateways, and responsive design for mobile and desktop users. Regularly collaborated with the backend team to ensure data consistency and application performance, resulting in a robust and scalable e-commerce solution.",
      image: ByteBazaar,
      technologies: ["HTML", "CSS", "JS", "REACT"],
      demoLink: "https://bytebazaar.co.nz/",
    },
    {
      title: "Avtrix Website",
      description:
        "Designed and developed dynamic content management solutions for the company website using React and Payload CMS. This involved enhancing website structures, collaborating on strategic planning, optimizing performance, and managing issues to ensure a robust and dynamic online presence. Integrated SEO best practices to improve visibility and engagement. Worked closely with content creators to enable efficient updates and ensured the site maintained high performance and reliability, resulting in a user-friendly and content-rich website.",
      image: Avtrix,
      technologies: ["HTML", "CSS", "JS", "REACT"],
      demoLink: "https://avtrix.co.nz/",
    },
  ];

  return (
    <div className="mywork-comp">
      <div className="container">
        <h1>Project Highlights</h1>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default MyWork;
