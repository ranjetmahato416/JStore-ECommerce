import React from "react";

function Footer() {
  return (
    <>
      <div className="overflow-hidden">
        <footer className="page-footer mt-1 bg-secondary text-dark">
          <div className="container text-md-left">
            <div className="row">
              <div className="col-md-4 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-1 mb-1">
                  Customer Care
                </h5>

                <ul className="list-unstyled">
                  <li>
                    <a className="text-dark text-decoration-none" href="#!">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#!">
                      How to Buy
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#!">
                      Returns & Refunds
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#!">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <hr className="clearfix w-100 d-md-none" />

              <div className="col-md-4 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-1 mb-1">
                  JStore
                </h5>

                <ul className="list-unstyled">
                  <li>
                    <a className="text-dark text-decoration-none" href="#!">
                      About JStore
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#!">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#!">
                      JStore Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#!">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>

              <hr className="clearfix w-100 d-md-none" />

              <div className="col-md-4 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-1 mb-1">
                Earn with JStore
                </h5>

                <ul className="list-unstyled">
                  <li>
                    <a className="text-dark text-decoration-none" href="#!">
                      JStore University 
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#!">
                      Sell on JStore
                    </a>
                  </li>
                  <li>
                    <a className="text-dark text-decoration-none" href="#!">
                      Code of Conduct
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center bg-warning">
            <p>
              {" "}
              © 2022 Copyright{" "}
              <span>
                <b>RNPD.</b>
              </span>{" "}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
