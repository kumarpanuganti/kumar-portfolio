import React from "react";
import MyPic from "../Images/MyPic2.jpeg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    window.scrollTo(0, 0); 
    navigate("/about-me")
  };
  return (
    <div className="home-page">
      <div className="container">
        <div className="home-page-welcome">
          <div className="row">
            <motion.h1
              className="text-center home-page-welcome-totext"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, duration: 1 }}
            >
              Welcome To My Portfolio
            </motion.h1>
            <div className="home-page-welcome-box">
              <motion.div
                className="col-lg-5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  delay: 0.5,
                  duration: 1,
                }}
              >
                <div className="home-page-welcome-box-logo">
                  <img src={MyPic} alt="kumar" />
                </div>
              </motion.div>
              <motion.div
                className="col-lg-7"
                initial={{ y: "-100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  delay: 1,
                  duration: 1,
                }}
              >
                <div className="home-page-welcome-box-content">
                  <motion.h1
                    className="home-page-welcome-box-content-title"
                    initial={{ x: "100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      delay: 1.1,
                      duration: 1,
                    }}
                  >
                    Hi, I'm Kumar Panuganti
                  </motion.h1>
                  <motion.h2
                    className="home-page-welcome-box-content-desgn"
                    initial={{ y: "100vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      delay: 1.1,
                      duration: 1,
                    }}
                  >
                    Frontend Developer
                  </motion.h2>
                  <motion.h3
                    className="home-page-welcome-box-content-para"
                    initial={{ x: "-100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      delay: 1.1,
                      duration: 1,
                    }}
                  >
                    I specialize in creating beautiful,
                    <span> responsive, and user-friendly</span> web interfaces.
                  </motion.h3>
                  <motion.button
                    className="btn btn-dark border-none text-right"
                    onClick={handleNavigation }
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      delay: 1.1,
                      duration: 1,
                    }}
                  >
                    Know more
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
