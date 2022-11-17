import React from "react";
import Menu from "../Menu/Menu";
import "./BurgerMenu.css";
const BurgerMenu = () => {
  const items = [
    { value: "Добавить билеты", href: "/add" },
    { value: "Билеты", href: "/" },
    { value: "RM Shop", href: "/" },
    { value: "О клубе", href: "/" },
    { value: "Стадион Бернабеу", href: "/" },
    { value: "Партнеры", href: "/" },
  ];
  return (
    <div className="showBurgerMenu">
      <nav className="showBurgerMenu__nav">
        <div className="showBurgerMenu__nav__btn">
          <span />
        </div>
      </nav>
      <main className="showBurgerMenu__main">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          minima alias error velit cupiditate tempore! Eveniet ipsam fuga est
          mollitia laboriosam aspernatur porro quis aliquid, nihil quas fugit
          quibusdam id aperiam perferendis expedita sunt quod iste libero totam
          ab sed voluptatum vitae similique qui. Qui, id? Harum ea repellendus
          delectus!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          minima alias error velit cupiditate tempore! Eveniet ipsam fuga est
          mollitia laboriosam aspernatur porro quis aliquid, nihil quas fugit
          quibusdam id aperiam perferendis expedita sunt quod iste libero totam
          ab sed voluptatum vitae similique qui. Qui, id? Harum ea repellendus
          delectus!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          minima alias error velit cupiditate tempore! Eveniet ipsam fuga est
          mollitia laboriosam aspernatur porro quis aliquid, nihil quas fugit
          quibusdam id aperiam perferendis expedita sunt quod iste libero totam
          ab sed voluptatum vitae similique qui. Qui, id? Harum ea repellendus
          delectus!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          minima alias error velit cupiditate tempore! Eveniet ipsam fuga est
          mollitia laboriosam aspernatur porro quis aliquid, nihil quas fugit
          quibusdam id aperiam perferendis expedita sunt quod iste libero totam
          ab sed voluptatum vitae similique qui. Qui, id? Harum ea repellendus
          delectus!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          minima alias error velit cupiditate tempore! Eveniet ipsam fuga est
          mollitia laboriosam aspernatur porro quis aliquid, nihil quas fugit
          quibusdam id aperiam perferendis expedita sunt quod iste libero totam
          ab sed voluptatum vitae similique qui. Qui, id? Harum ea repellendus
          delectus!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          minima alias error velit cupiditate tempore! Eveniet ipsam fuga est
          mollitia laboriosam aspernatur porro quis aliquid, nihil quas fugit
          quibusdam id aperiam perferendis expedita sunt quod iste libero totam
          ab sed voluptatum vitae similique qui. Qui, id? Harum ea repellendus
          delectus!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          minima alias error velit cupiditate tempore! Eveniet ipsam fuga est
          mollitia laboriosam aspernatur porro quis aliquid, nihil quas fugit
          quibusdam id aperiam perferendis expedita sunt quod iste libero totam
          ab sed voluptatum vitae similique qui. Qui, id? Harum ea repellendus
          delectus!
        </p>
      </main>
      <Menu header={"Меню"} items={items} />
    </div>
  );
};

export default BurgerMenu;
