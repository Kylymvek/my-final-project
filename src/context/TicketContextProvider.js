import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import {
//   addDoc,
//   collection,
//   deleteDoc,
//   doc,
//   getDoc,
//   getDocs,
//   getFirestore,
//   updateDoc,
// } from "firebase/firestore";
// import app from "../firebase";

export const ticketContext = createContext();

const API = "http://localhost:8000/tickets";

const INIT_STATE = {
  tickets: null,
  ticketDetails: null,
  pageTotalCount: 1,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_TICKETS":
      return {
        ...prevState,
        tickets: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 4),
      };
    case "GET_ONE_TICKET":
      return { ...prevState, ticketDetails: action.payload };
    default:
      return prevState;
  }
}

const TicketContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();

  const navigate = useNavigate();

  // const db = getFirestore(app); // это API из Firebase

  //! create db.json
  async function addTicket(newTicket) {
    try {
      await axios.post(API, newTicket);
    } catch (error) {
      return error;
    }
  }

  //? read
  async function readTicket() {
    try {
      const res = await axios(`${API}${location.search}`);
      console.log(res);
      dispatch({
        type: "GET_TICKETS",
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  }

  //? delete
  async function deleteTicket(id) {
    try {
      const res = await axios.delete(`${API}/${id}`);
      readTicket();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  //? edit
  async function editTicket(id, editedObj) {
    await axios.patch(`${API}/${id}`, editedObj);
    readTicket();
  }

  //? функция для детального обзора

  async function readOneTicket(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_TICKET",
      payload: data,
    });
  }

  //!firebase
  // create firebase
  // async function addTicket(newTicket) {
  //   try {
  //     await addDoc(collection(db, "tickets"), newTicket);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  //   read firebase
  // async function readTicket() {
  //   try {
  //     const { docs } = await getDocs(
  //       collection(db, "tickets", `${location.search}`)
  //     );
  //     const data = docs.map(item => {
  //       return { ...item.data(), id: item.id };
  //     });

  //     dispatch({
  //       type: "GET_TICKETS",
  //       payload: data,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // функция для детального обзора firebase
  // async function readOneTicket(id) {
  //   try {
  //     const oneDoc = doc(db, "tickets", id);
  //     const data = await getDoc(oneDoc);
  //     let obj = { ...data.data(), id: data.id };
  //     dispatch({
  //       type: "GET_ONE_TICKET",
  //       payload: obj,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // delete firebase
  // async function deleteTicket(id) {
  //   try {
  //     let oneDoc = doc(db, "tickets", id);
  //     await deleteDoc(oneDoc);
  //     readTicket();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // update firebase
  // async function editTicket(id, editedObj) {
  //   try {
  //     let oneDoc = doc(db, "tickets", id);
  //     await updateDoc(oneDoc, editedObj);
  //     readTicket();
  //     navigate(`/details/${id}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  let cloud = {
    addTicket,
    readTicket,
    deleteTicket,
    readOneTicket,
    editTicket,
    ticketsArr: state.tickets,
    ticketDetails: state.ticketDetails,
    pageTotalCount: state.pageTotalCount,
  };

  return (
    <ticketContext.Provider value={cloud}>
      {props.children}
    </ticketContext.Provider>
  );
};

export default TicketContextProvider;
