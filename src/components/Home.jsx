import React from "react";
import { NavLink } from 'react-router-dom';
import About from './About'
import Contact from './Contact'

function Home() {
  return (
    <>
    <div className="container-fluid">
      <div className="card text-white bg-success mt-1 px-5">
        <img
          className="card-img"
          src="/assets/background.jpg"
          alt="bgimg"
          height="700px"
        />
        <div className="card-img-overlay row">
        <div
            className="col-lg-6"
          >
            <div className="mx-5 p-2 bg-success rounded bg-opacity-50">
              <h5 className="card-title display-3 fw-bold mb-0">
                SUMMER NEW ARRIVALS
              </h5>
              <p className="card-text lead fs-2 text-warning">
                Check Out All The Trends.
            </p>
            </div>
          </div>
          <div className="col-lg-4 mx-5 px-5">
            <div className="d-flex flex-row p-2 bg-warning rounded bg-opacity-50">
              <div className="socialMedia">
                <div className="explore text-primary">
                    <i className="fa fa-globe"></i>
                </div>
                <div className="socialLinks">
                  <div className="instagram text-danger">
                      <i className="fa fa-instagram"></i>
                    
                  </div>
                  <div className="tweeter text-primary">
                      <i className="fa fa-twitter"></i>
                    
                  </div>
                  <div className="facebook text-primary">
                      <i className="fa fa-facebook-f"></i>
                    
                  </div>
                </div>
              </div>
              <div className="">
                <NavLink to={'/product'} className="btn btn-success m-5" >SHOP NOW...</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div>
      <About/>
      </div>
      <div>
      <Contact/>
      </div>
    </>
  );
}

export default Home;
