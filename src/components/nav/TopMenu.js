import React from "react";
import BuyerMenu from "./BuyerMenu";
import SellerMenu from "./SellerMenu";
import AdminMenu from "./AdminMenu";
const TopMenu = () => {
  return (
    <React.Fragment>
      <>
      <nav className="navbar navbar-expand-lg  p-0">
        <div className="container">
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
             <AdminMenu/>
             <SellerMenu/>
             <BuyerMenu/>
            </ul>
          </div>
        </div>
      </nav>



      </>
    

    </React.Fragment>
  );
};

export default TopMenu;
