import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { Dropdown, Card, Alert } from "react-bootstrap";
import { storeageUtil } from "../../store/localStorage/local";
import { APP_CONFIG } from "../../services/Constants";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import CardHeader from "react-bootstrap/esm/CardHeader";
import FilterPrice from "../filter/Price";


const Header = () => {

  let counter = 0
  let cartData = storeageUtil.getItem(APP_CONFIG.data.CART_DATA)
  counter = cartData == null ? counter : cartData.length

  const navigate = useNavigate()

  const logout = () => {
    storeageUtil.clearStorage()
    navigate("/shop")
  }

  const token = storeageUtil.getItem(APP_CONFIG.data.TOKEN_NAME);
  const username = storeageUtil.getItem(APP_CONFIG.data.USER_NAME)


  const guest = () => {
    return (
      <div className="col-md-2">
        <Link to="/login">
          <button type="button" className="btn btn-outline-primary">Sign In</button>
        </Link> |{" "}
        <Link to="/signup">
          <button type="button" className="btn btn-outline-primary">Sign Up</button>
        </Link>
      </div>
    )
  }

  function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  const loggedIn = () => {
    return (
      <div className="col-md-2">

        <div className="row">

          <div className="col-6 ">
            ({capitalize(username)})
            <FontAwesomeIcon icon={solid('user')} size="2x" className="text-primary" />
          </div>

          <div className="col-6">
            <FontAwesomeIcon icon={solid('power-off')} onClick={logout} size="2x" className="text-danger" />
          </div>

        </div>
      </div>

    )
  }

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
                    {counter}
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu >
                  <div class="card">
                    <div class="card-header text-success">
                      Inside your cart
                    </div>
                    <div class="card-body">

                      {
                        counter == 0 ? 'Your cart is empty' : <div>
                          {cartData.map((product) =>
                            <div>
                              <h5 class="card-title">{product.name}</h5>
                              <p class="card-text">Quantity : {product.quantity}</p>
                              <p className="card-text">Price : {product.price}</p>
                              <hr />
                            </div>

                          )}
                          <button className="btn btn-success" onClick={()=>console.log("do this part tomorrow")}>checkout</button>
                        </div>
                      }


                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {
              token == null ? guest() : loggedIn()
            }
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;