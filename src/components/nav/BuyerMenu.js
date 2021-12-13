import React from 'react'
import { Link } from "react-router-dom";

function BuyerMenu() {
    return (
        <>
             <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Buyer Link1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Buyer Link2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Buyer Link3
                </Link>
              </li>
              
        </>
    )
}

export default BuyerMenu
