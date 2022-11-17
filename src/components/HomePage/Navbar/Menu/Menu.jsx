import React from "react";
import "./Menu.css";
const Menu = ({ header, items, active, setActive }) => {
  return (
    <div className={active ? "menu active" : "menu"}>
      <div className="blur" />
      <div className="menu__content">
        <div className="menu__header">{header}</div>
        <ul className="menu__li">
          {items.map(item => (
            <li>
              <a href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
