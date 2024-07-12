import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="contact">
      <motion.section
        className="contact-section"
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      >
        <h2>Contact Me</h2>
        <h6>
          I'd love to hear from you! Please fill out the form below or reach out
          via email or social media.
        </h6>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="form-control mb-4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p>
            Email :
            <a href="mailto:kpanuganti82@gmail.com"> kpanuganti82@gmail.com</a>
          </p>
          <p>
            LinkedIn :
            <a
              href="https://linkedin.com/in/kumar-panuganti-733412253"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              linkedin.com/in/kumar-panuganti-733412253
            </a>
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
