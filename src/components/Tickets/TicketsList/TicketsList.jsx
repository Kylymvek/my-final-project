import React, { useContext, useEffect } from "react";
import { ticketContext } from "../../../context/TicketContextProvider";
import Footer from "../../HomePage/Footer/Footer";
import Navbar from "../../HomePage/Navbar/Navbar";
import TicketCard from "../TicketCard/TicketCard";
import "./TicketsList.css";

const TicketsList = () => {
  const { readTicket, ticketsArr } = useContext(ticketContext);
  useEffect(() => {
    readTicket();
  }, []);

  return (
    <>
      <div className="ticket-cards">
        {ticketsArr
          ? ticketsArr.map(item => <TicketCard item={item} key={item.id} />)
          : null}
      </div>
    </>
  );
};

export default TicketsList;
