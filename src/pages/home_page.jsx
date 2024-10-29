import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/banner.png';
import FindPPl from '../assets/main1.jpeg';
import Achiev from '../assets/main2.jpeg';
import '../stylesheets/homepage/index.scss';

export const Homepage = () => {
  return (
    <>
      <div className="fullscreen-background" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="titulo" href="#">
          <h1>BoardMatch</h1>
          <a className="subtitulo">Conquista cada partida, desafía tus límites</a>
        </div>
      </div>
      
      <div className="image-container">
          <div className="ImgItem">
            <Link to="/comunidades">
              <img
                src={FindPPl}
                alt="Encuentra personas"
                className="main_12"
              />
            </Link>
            <p>
              <a href="/comunidades">Encuentra personas con tu mismo interes</a>
            </p>
          </div>
          <div className="ImgItem">
            <Link to="/logros">
              <img
                src={Achiev}
                alt="Logros"
                className="main_12"
              />
            </Link>
            <p>
              <a href="/logros">Publica tus logros</a>
            </p>
          </div>
      </div>
    </>
  );
};

export default Homepage;
