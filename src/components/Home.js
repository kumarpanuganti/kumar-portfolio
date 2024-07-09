import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="home-page-welcome">
          <div className="row">
            <h1 className="text-center home-page-welcome-totext">We<span>lc</span>ome <span>to</span> my por<span>tfo</span>lio</h1>
            <div className="home-page-welcome-box">
              <div className="col-lg-5">
                <div className="home-page-welcome-box-logo">

                <img src="https://static.toiimg.com/thumb/msid-86986189,imgsize-29622,width-400,resizemode-4/86986189.jpg" alt="kumar" />
                </div>
              </div>
              <div className="col-lg-7 ">
                <div className="home-page-welcome-box-content">

                <h1 className="home-page-welcome-box-content-title">Hi, I'm Kumar Panuganti</h1>
                <h2 className="home-page-welcome-box-content-desgn">I'm a Frontend Developer</h2>
                <h3 className="home-page-welcome-box-content-para">I specialize in creating beautiful, 
                  <span> responsive, and user-friendly</span> web interfaces.</h3>
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
