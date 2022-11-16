import React from "react";
import TicketDetails from "../Tickets/TicketDetails/TicketDetails";
import TicketsList from "../Tickets/TicketsList/TicketsList";
import Footer from "./Footer/Footer";
import "./HomePage.css";
import Navbar from "./Navbar/Navbar";
import PalmaresContent from "./PalmaresContent/PalmaresContent";

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* <TicketDetails /> */}
      <TicketsList />
      {/* <PalmaresContent /> */}
      <Footer />
    </>
  );
};

export default HomePage;
