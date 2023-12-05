import React from "react";
import "./Home.scss";
import Header from "../../components/Header/header";
import Posts from "../../components/Posts/Posts";

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <h1>This is home</h1>
      <Posts/>
    </React.Fragment>
  )
};

export default Home;
