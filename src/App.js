import React from "react";
import HomePage from "./components/HomePage/HomePage";
import AuthContextProvider from "./context/AuthContextProvider";
import BasketContextProvider from "./context/BasketContextProvider";
import ComentContextProvider from "./context/CommentContextProvider";
import TicketContextProvider from "./context/TicketContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <ComentContextProvider>
      <TicketContextProvider>
        <BasketContextProvider>
          <AuthContextProvider>
            <MainRoutes />
          </AuthContextProvider>
        </BasketContextProvider>
      </TicketContextProvider>
    </ComentContextProvider>
  );
};

export default App;
