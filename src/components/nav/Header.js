import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import Popper from 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { Dropdown } from "react-bootstrap";
const Header = () => {
  return (
    <React.Fragment>
      <header className="p-3 border-bottom bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <h2 className="display-7 text-primary">
                <Link to="/" className="text-primary" style={{ textDecoration: 'none' }}>Shoppers Spot</Link>
              </h2>
            </div>
            <div className="col-md-5">
              <Search />
            </div>

            <div className="col-md-1">
              
            </div>
            <div className="col-md-1">
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic" size="sm">
                <IconCart3 className="i-va" />
                <div className="position-absolute top-0 left-100 translate-middle badge bg-danger rounded-circle">
                    (2)
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            
            <div className="col-md-2">
              <Link to="/account/signin">
                <button type="button" className="btn btn-outline-primary">Sign In</button>
              </Link> |{" "}
              <Link to="/account/signup">
                <button type="button" className="btn btn-outline-primary">Sign Up</button>
              </Link> 
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;