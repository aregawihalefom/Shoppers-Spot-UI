import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { routes, routeAccess } from '../../services/config'
import { storeageUtil } from '../../store/localStorage/local'
import { APP_CONFIG } from './../../services/Constants';


const TopMenu = () => {


  const role = storeageUtil.getItem(APP_CONFIG.data.ROLE) || ''
  const [filteredRoutes, setFilteredRoutes] = useState([])

  useEffect(() => {
    const filtered = routes.filter(route => {
      if (route.roles.includes(role.toLowerCase())) {
        const metaName = route.path.split('/').slice(-1)[0]
        return true
      }
      return false
    })
    setFilteredRoutes(filtered)
  }, [])
  return (
    <React.Fragment>
      <>
        <nav className="navbar navbar-expand-lg  p-0">
          <div className="container">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">

                {filteredRoutes.map(route =>
                  <li className="nav-item" key={route.id}>
                    <Link
                      className="nav-link" to={route.path}>{route.name}
                    </Link>
                  </li>)}
              </ul>
            </div>
          </div>
        </nav>
      </>
    </React.Fragment>
  );
};

export default TopMenu;
