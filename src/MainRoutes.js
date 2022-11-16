import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import AddTicket from "./components/Admin/AddTicket/AddTicket";
import EditTicket from "./components/Admin/EditTicket/EditTicket";
import Authorization from "./components/Auth/Authorization";
import BasketTicket from "./components/BasketTicket/BasketTicket";
import HomePage from "./components/HomePage/HomePage";
import RegisterPage from "./components/Register/RegisterPage";
import TicketDetails from "./components/Tickets/TicketDetails/TicketDetails";
import TicketsList from "./components/Tickets/TicketsList/TicketsList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/add" element={<AddTicket />} />
      <Route path="/list" element={<TicketsList />} />
      <Route path="/details/:id" element={<TicketDetails />} />
      <Route path="/edit/:id" element={<EditTicket />} />
      <Route path="/basket" element={<BasketTicket />} />
    </Routes>
  );
};

export default MainRoutes;
