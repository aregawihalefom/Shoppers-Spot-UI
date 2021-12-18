import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";


const Footer = () => {
  return (
    <React.Fragment>
      <footer>
  
        <div className="container-fluid bg-dark text-white mt-4">
          <div className="row ">
            <div className="col-md-3 py-3">
              <div className="h6">Company Name</div>
              <hr />
              <p>
                Placeholder
              </p>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Category</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Electronics
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Fashion
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Sport
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Super Market
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Travel Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
            
            </div>
            <div className="col-md-3 py-3">
              
              
            </div>
          </div>
        </div>
        
      </footer>
    </React.Fragment>
  );
};
export default Footer;
