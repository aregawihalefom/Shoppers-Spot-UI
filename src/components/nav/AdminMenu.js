import React from 'react'
import { Link } from "react-router-dom";

function AdminMenu() {
    return (
        <>
             <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Sellers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Admin LC
                </Link>
              </li>
            
        </>
    )
}

export default AdminMenu
