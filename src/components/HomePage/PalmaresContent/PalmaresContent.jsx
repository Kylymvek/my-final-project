import React from "react";
import FirstTrophiesImg from "./imagesPalmaresContent/Satellite.png";
import SecondTrophiesImg from "./imagesPalmaresContent/Satellite2.png";
import ThirthTrophiesImg from "./imagesPalmaresContent/Satellite3.png";
import FourthTrophiesImg from "./imagesPalmaresContent/Satellite4.png";
import FifthTrophiesImg from "./imagesPalmaresContent/Satellite5.png";
import SixthTrophiesImg from "./imagesPalmaresContent/Satellite6.png";

import "./PalmaresContent.css";

const PalmaresContent = () => {
  return (
    <div className="palmares-content">
      <div className="container-palmares-content">
        <h1>ПАЛЬМАРЕС РЕАЛ МАДРИД</h1>
        <div className="palmares-content__trophies">
          <div className="trophies__first">
            <div className="trophies__first__img">
              <img src={FirstTrophiesImg} alt="" />
            </div>
            <div className="trophies__first__subtitle">
              <p> </p>
              <p>Приз ФИФА лучшему клубу ХХ века</p>
            </div>
          </div>
          <div className="trophies__other">
            <div className="trophies__other__img">
              <img src={SecondTrophiesImg} alt="ucl-cup-img" />
            </div>
            <div className="trophies__other__subtitle">
              <p className="trophies__other__subtitle_number">14</p>
              <p className="trophies__other__subtitle_text">Кубков ЛЧ</p>
            </div>
          </div>
          <div className="trophies__other">
            <div className="trophies__other__img">
              <img src={ThirthTrophiesImg} alt="img" />
            </div>
            <div className="trophies__other__subtitle">
              <p className="trophies__other__subtitle_number">7</p>
              <p className="trophies__other__subtitle_text">Мировые клубы</p>
            </div>
          </div>
          <div className="trophies__other">
            <div className="trophies__other__img">
              <img src={FourthTrophiesImg} alt="img" />
            </div>
            <div className="trophies__other__subtitle">
              <p className="trophies__other__subtitle_number">5</p>
              <p className="trophies__other__subtitle_text">
                Суперкубков Европы
              </p>
            </div>
          </div>
          <div className="trophies__other">
            <div className="trophies__other__img">
              <img src={FifthTrophiesImg} alt="img" />
            </div>
            <div className="trophies__other__subtitle">
              <p className="trophies__other__subtitle_number">2</p>
              <p className="trophies__other__subtitle_text">Кубка УЕФА</p>
            </div>
          </div>
          <div className="trophies__other">
            <div className="trophies__other__img">
              <img src={SixthTrophiesImg} alt="img" />
            </div>
            <div className="trophies__other__subtitle">
              <p className="trophies__other__subtitle_number">35</p>
              <p className="trophies__other__subtitle_text">Кубков Ла Лиги</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalmaresContent;
