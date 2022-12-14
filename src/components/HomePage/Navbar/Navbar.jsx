import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import logoRealMadrid from "./imagesNavbar/header_logo.svg.svg";
import logoUcl from "./imagesNavbar/parche_champions_14.png.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import { basketContext } from "../../../context/BasketContextProvider";
import { ticketContext } from "../../../context/TicketContextProvider";
import { useAuth } from "../../../context/AuthContextProvider";
import Menu from "./Menu/Menu";

const Navbar = () => {
  const items = [
    { value: "Добавить билеты", href: "/add" },
    { value: "Билеты", href: "/" },
    { value: "RM Shop", href: "/" },
    { value: "О клубе", href: "/" },
    { value: "Стадион Бернабеу", href: "/" },
    { value: "Партнеры", href: "/" },
  ];

  const [menuActive, setMenuActive] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const { readTicket, pageTotalCount } = useContext(ticketContext);
  const { basketCount } = useContext(basketContext);

  const { currentUser } = useAuth();
  const [searchValue, setSearchValue] = useState("");
  const [paramsSearch, setParamsSearch] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setParamsSearch({
        q: searchValue,
      });
    }
  }, [searchValue]);

  useEffect(() => {
    readTicket();
  }, [pageTotalCount, paramsSearch]);

  function ShowSearch() {
    if (showSearch) {
      return setShowSearch(false);
    } else {
      return setShowSearch(true);
    }
  }

  return (
    <>
      <nav className="nav__burgerMenu">
        <div className="burgerMenu">
          <MenuIcon
            fontSize="large"
            onClick={() => setMenuActive(!menuActive)}
          />
        </div>
        <div className="navbar__left">
          <div className="left__logo-real">
            <img src={logoRealMadrid} alt="logo-real" />
          </div>
          <div className="left__logo-ucl">
            <img src={logoUcl} alt="logo-ucl" />
          </div>
        </div>
        <ul className="navbar__center">
          {currentUser.email === "kylymbek@gmail.com" ? (
            <li onClick={() => navigate("/add")}>
              Добавить
              <br /> билеты
            </li>
          ) : null}
          <li>Билеты</li>
          <li>RM Shop</li>
          <li>О клубе</li>
          <li>Стадион Бернабеу</li>
          <li>Партнеры</li>
        </ul>
        <div className="navbar__right">
          <div className="right__search">
            <SearchIcon
              onClick={() => ShowSearch()}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="right__basket">
            <Badge badgeContent={basketCount} color="error">
              <ShoppingCartIcon
                onClick={() => navigate("/basket")}
                style={{ cursor: "pointer" }}
              />
            </Badge>
          </div>
          <div className="right__login">
            <img
              src="https://freesvg.org/img/abstract-user-flat-4.png"
              alt="icon-login"
              onClick={() => navigate("/register")}
            />
          </div>
        </div>
      </nav>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Меню"}
        items={items}
      />
      {/* for search */}
      {showSearch ? (
        <div className="container nav-search">
          <input
            // type="search"
            inputProps={{ "aria-label": "search" }}
            placeholder="Поиск"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
          <Button variant="contained" sx={{ marginLeft: "5px" }}>
            Поиск
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
