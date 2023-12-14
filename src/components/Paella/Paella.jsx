import React from "react";
import "./Paella.scss";
import CustomPaellaImage from "../../assets/754083ee-d23c-44f6-b148-11ccde04c113.jpg";
import Maquinas from "../../assets/5ba2f7fb-3ac8-4786-bab3-d2df994dc714.jpg";
import Macarras from "../../assets/a1e48810-25b2-43f2-9f9f-084534065f93.jpg";
import MainNav from "../Header/MainNav/MainNav";

const Paella = () => {
  return (
    <div className="paella-container">
      <p className="paella-paragraph">🥘RUTA DE LA PAELLA🥘</p>
      <p className="paella-paragraph">❤️SIUUU!!❤️</p>
      <p className="paella-paragraph">Te queremos mucho Sofi</p>
      <div className="paella-img-container">
        <h3>Los Makinas</h3>
        <img src={CustomPaellaImage} alt="PaellaCobra" />
      </div>
      <div className="paella-img-container">
        <img src={Maquinas} alt="huha" />
      </div>
      <div className="paella-img-container">
        <img src={Macarras} alt="huha" />
      </div>
      <MainNav className="paella-main-nav" />
    </div>
  );
};

export default Paella;
