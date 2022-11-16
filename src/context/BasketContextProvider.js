import React, { createContext, useReducer } from "react";

export const basketContext = createContext();

function getCountTicketsBasket() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  return basket ? basket.tickets.length : 0;
}

const INIT_STATE = {
  basket: JSON.parse(localStorage.getItem("basket")),
  basketCount: getCountTicketsBasket(),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_BASKET":
      return { ...prevState, basket: action.payload };
    case "CHANGE_BASKET_COUNT":
      return { ...prevState, basketCount: action.payload };
    default:
      return prevState;
  }
}
const BasketContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addTicketToBasket(ticketObj) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (basket === null) {
      basket = {
        tickets: [],
        totalPrice: 0,
      };
    }

    let newTicket = {
      item: ticketObj,
      count: 1,
      subPrice: ticketObj.price,
    };

    //Хранение дубликатов
    let filterBasket = basket.tickets.filter(elem => {
      return elem.item.id === ticketObj.id;
    });

    if (filterBasket.length > 0) {
      basket.tickets = basket.tickets.filter(elem => {
        return elem.item.id !== ticketObj.id;
      });
    } else {
      basket.tickets.push(newTicket);
    }
    basket.totalPrice = calcTotalPrice(basket.tickets);
    localStorage.setItem("basket", JSON.stringify(basket));
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.tickets.length,
    });
  }

  function getBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      basket = {
        tickets: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: "GET_BASKET",
      payload: basket,
    });
  }

  function changeTicketCount(id, count) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.tickets = basket.tickets.map(elem => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = count * elem.item.price;
      }
      return elem;
    });
    basket.totalPrice = calcTotalPrice(basket.tickets);
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  function calcTotalPrice(tickets) {
    let total = 0;
    tickets.map(item => {
      total += item.subPrice;
    });
    return total;
  }

  //delete ticket from basket
  function deleteBasketTicket(id) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.tickets = basket.tickets.filter(elem => {
      return elem.item.id !== id;
    });
    basket.totalPrice = calcTotalPrice(basket.tickets);
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.tickets.length,
    });
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  const cloud = {
    addTicketToBasket,
    getBasket,
    changeTicketCount,
    deleteBasketTicket,
    ticketsInBasket: state.basket,
    basketCount: state.basketCount,
  };

  return (
    <basketContext.Provider value={cloud}>{children}</basketContext.Provider>
  );
};

export default BasketContextProvider;
