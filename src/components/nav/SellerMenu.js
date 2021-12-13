import React from 'react'
import { Link } from "react-router-dom";

function SellerMenu() {
    return (
        <>
              <li className="nav-item">
                <Link className="nav-link" to="/sellers/products">
                Manage Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                 Report
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">

                </Link>
              </li>
        </>
    )
}

export default SellerMenu
