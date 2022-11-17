import React from "react";
import Filter from "../Filter/Filter";
import TicketDetails from "../Tickets/TicketDetails/TicketDetails";
import TicketsList from "../Tickets/TicketsList/TicketsList";
import Footer from "./Footer/Footer";
import "./HomePage.css";
import Navbar from "./Navbar/Navbar";
import PalmaresContent from "./PalmaresContent/PalmaresContent";

const HomePage = () => {
  return (
    <div className="homePage">
      <Navbar />
      {/* <TicketDetails /> */}
      <TicketsList />
      {/* <Filter /> */}
      {/* <PalmaresContent /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
