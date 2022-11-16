import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlayMarketIcon from "./imagesFooter/Playmarket.png";
import AppStoreIcon from "./imagesFooter/Appstore.png";
import BackgroundPng from "./imagesFooter/background.png";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container__footer__content">
          <div className="footer__content__left">
            <h3>Подписывайтесь на нас</h3>
            <ul className="footer__content__left__icons">
              <li>
                <FacebookIcon fontSize="large" />
              </li>
              <li>
                <InstagramIcon fontSize="large" />
              </li>
              <li>
                <TwitterIcon fontSize="large" />
              </li>
              <li>
                <YouTubeIcon fontSize="large" />
              </li>
            </ul>
          </div>
          <div className="footer__content__right">
            <h3>Приложение "Реал Мадрид"</h3>
            <ul className="footer__content__right__icons">
              <li>
                <img
                  className="footer__content__right__icon_style"
                  src={PlayMarketIcon}
                  alt="playmarketIcon"
                />{" "}
              </li>
              <li>
                <img
                  className="footer__content__right__icon_style"
                  src={AppStoreIcon}
                  alt="appstoreIcon"
                />{" "}
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__content__under">
          Реал Мадрид © 2022 Все права защищены
        </p>
      </div>
    </>
  );
};

export default Footer;
