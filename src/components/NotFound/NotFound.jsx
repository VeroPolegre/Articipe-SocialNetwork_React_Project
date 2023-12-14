import React from "react";
import MainNav from "../Header/MainNav/MainNav";
import "./NotFound.scss";

import Custom404Image from "../../assets/cd379a83cdf6f6d4cf9775205244eea2.gif";

const NotFound = () => {
  return (
    <>
      <div className="page-error">
        <div className="img-container">
          <img src={Custom404Image} alt="404" />
        </div>
        <h3>404 Not Found</h3>
        <p>Sorry, my love, there is nothing here.</p>
        <p>⭐crying in korean⭐</p>
      </div>
      <MainNav />
    </>
  );
};

export default NotFound;
