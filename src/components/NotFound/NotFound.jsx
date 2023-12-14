import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import MainNav from "../Header/MainNav/MainNav";
import "./NotFound.scss";

import Custom404Image from "../../assets/cd379a83cdf6f6d4cf9775205244eea2.gif";

const NotFound = () => {
  return (
    <>
      <div>
        <div className="img-container">
          <img src={Custom404Image} alt="404" />
        </div>
        <h3>404 Not Found</h3>
        <p>⭐crying in korean⭐</p>
        <p>Sorry, my love, there is nothing here.</p>
      </div>
      <MainNav />
    </>
  );
};

export default NotFound;
