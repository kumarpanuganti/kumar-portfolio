import React from "react";
import MyPic from "../Images/MyPic2.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home-page">
      <div className="container">
        <div className="home-page-welcome">
          <div className="row">
            <h1 className="text-center home-page-welcome-totext">Welcome To My Portfolio</h1>
            <div className="home-page-welcome-box">
              <div className="col-lg-5">
                <div className="home-page-welcome-box-logo">
                <img src={MyPic}
                 alt="kumar" />
                </div>
              </div>
              <div className="col-lg-7 ">
                <div className="home-page-welcome-box-content">
                <h1 className="home-page-welcome-box-content-title">Hi, I'm Kumar Panuganti</h1>
                <h2 className="home-page-welcome-box-content-desgn">Frontend Developer</h2>
                <h3 className="home-page-welcome-box-content-para">I specialize in creating beautiful, 
                  <span> responsive, and user-friendly</span> web interfaces.</h3>
                  <button className="btn btn-dark border-none text-right" onClick={()=> navigate('/about-me')}>Know more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
