import React from "react";
import HomePage from "./components/HomePage/HomePage";
import AuthContextProvider from "./context/AuthContextProvider";
import BasketContextProvider from "./context/BasketContextProvider";
import TicketContextProvider from "./context/TicketContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BasketContextProvider>
      <TicketContextProvider>
        <AuthContextProvider>
          <MainRoutes />
        </AuthContextProvider>
      </TicketContextProvider>
    </BasketContextProvider>
  );
};

export default App;
