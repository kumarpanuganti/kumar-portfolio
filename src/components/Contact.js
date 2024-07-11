import React, { useState } from "react";

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
      <section className="contact-section">
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
              rel="noopener noreferrer"> linkedin.com/in/kumar-panuganti-733412253
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
