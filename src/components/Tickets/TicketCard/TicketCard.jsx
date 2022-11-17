import React, { useContext } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./TicketCard.css";
import { ticketContext } from "../../../context/TicketContextProvider";
import { useNavigate } from "react-router-dom";
import { basketContext } from "../../../context/BasketContextProvider";

const TicketCard = ({ item }) => {
  const navigate = useNavigate();

  const { addTicketToBasket } = useContext(basketContext);

  return (
    <div className="container-ticket-card">
      <div className="card__up">
        <div className="card__up__liga">
          <img
            src={item.ligaLogo}
            alt="liga"
            onClick={() => navigate(`/details/${item.id}`)}
          />
        </div>
        <div className="card__up__macth">
          <div className="match__firstTeam">
            <img
              src={item.firstTeamLogo}
              alt="first team"
              onClick={() => navigate(`/details/${item.id}`)}
            />
          </div>
          <div className="match__secondTeam">
            <img
              src={item.secondTeamLogo}
              alt="second team"
              onClick={() => navigate(`/details/${item.id}`)}
            />
          </div>
        </div>
        <div className="card__up__nameteam">
          <div className="nameteam__first">
            <p onClick={() => navigate(`/details/${item.id}`)}>
              {item.firstTeamName}
            </p>
          </div>
          <p style={{ textAlign: "center" }}>-</p>
          <div className="nameteam__second">
            <p>{item.secondTeamName}</p>
          </div>
        </div>
        <div className="card__up__buyticket">
          <Button
            variant="contained"
            onClick={() => navigate(`/details/${item.id}`)}
          >
            Купить билеты
          </Button>
        </div>
      </div>
      <div className="card__bottom">
        <div className="card__bottom__date">
          <p>{item.date}</p>
          <p className="defisBeforeStadium">-</p>
          <p className="card__bottom__date_stadium">{item.location}</p>
        </div>
        <div className="card__bottom__priceandcart">
          <div className="priceandcart__price">
            <p>€{item.price}</p>
          </div>
          <div className="priceandcart__cart">
            <Button variant="contained" onClick={() => addTicketToBasket(item)}>
              <ShoppingCartIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
