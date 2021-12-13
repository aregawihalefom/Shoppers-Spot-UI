import React from 'react'
import { Link } from "react-router-dom";

function SellerMenu() {
    return (
        <>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                Admin LA
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                 Admin LB
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Seller LC
                </Link>
              </li>
        </>
    )
}

export default SellerMenu
