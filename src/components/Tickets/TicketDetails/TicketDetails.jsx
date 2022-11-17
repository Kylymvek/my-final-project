import React, { useContext, useEffect, useState } from "react";
import RMIcon from "./imagesTicketDetails/header_logo.svg.svg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

import "./TicketDetails.css";
import { Button, IconButton } from "@mui/material";
import { ticketContext } from "../../../context/TicketContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/AuthContextProvider";
import { comentContext } from "../../../context/CommentContextProvider";
import Navbar from "../../HomePage/Navbar/Navbar";
import Footer from "../../HomePage/Footer/Footer";

const TicketDetails = () => {
  const { readOneTicket, ticketDetails, deleteTicket } =
    useContext(ticketContext);

  const [coment, setComent] = useState("");

  const { addComent, deleteComent, comentArr, readComent } =
    useContext(comentContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const { currentUser } = useAuth();

  useEffect(() => {
    readOneTicket(id);
  }, [id]);

  useEffect(() => {
    readComent();
  }, []);

  function handleAdd(e) {
    e.preventDefault();
    // if (!currentUser.email) {
    //   alert("Чтобы оставить коментарий войдите через акаунт!");
    //   return;
    // }
    if (!coment.trim()) {
      alert("Заполните поле!");
      return;
    }

    let obj = {
      coment,
      key: id,
      user: currentUser.email,
    };
    addComent(obj);
    setComent("");
  }
  console.log(comentArr);

  return (
    <>
      <Navbar />
      {ticketDetails ? (
        <div className="details-background">
          <div className="container-details">
            <div className="details__top">
              <div className="details__top__left">
                <img src={RMIcon} alt="rmicon" />
              </div>
              <div className="details__top__right">
                <div className="details__top__right__ligaAndMatch">
                  <h2>{ticketDetails.liga} 2022/2023</h2>
                  <h3>
                    {ticketDetails.firstTeamName}{" "}
                    <span className="defisBetweenTeams">-</span>{" "}
                    {ticketDetails.secondTeamName}
                  </h3>
                </div>
                <div className="details__top__right__dateAndLocation">
                  <div>
                    <p>
                      <CalendarMonthIcon /> {ticketDetails.date}
                    </p>
                  </div>
                  <div>
                    <p className="detailsLocation">
                      <LocationOnIcon /> {ticketDetails.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="details__middle">
              <h1>О матче</h1>
              <p>{ticketDetails.description}</p>
            </div>
            <div className="details__bottom">
              <img src={ticketDetails.stadiumPhoto} alt="stadium" />
            </div>
            <div className="btn-for-user">
              <Button
                variant="contained"
                style={{ width: "300px", marginTop: "10px" }}>
                Купить
              </Button>
            </div>
            {currentUser.email === "kylymbek@gmail.com" ? (
              <div className="detailsBtns-forAdmin">
                <div className="detailsBtn1">
                  <Button
                    variant="contained"
                    style={{ width: "120%", backgroundColor: "red" }}
                    onClick={() => deleteTicket(ticketDetails.id)}>
                    Delete
                  </Button>
                </div>
                <div className="detailsBtn2">
                  <Button
                    variant="contained"
                    style={{ width: "120%", backgroundColor: "orange" }}
                    onClick={() => navigate(`/edit/${ticketDetails.id}`)}>
                    Edit
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
      {comentArr ? (
        <>
          {comentArr.map(item => (
            <div>
              {/* <div
                style={{
                  minWidth: "30px",
                  height: "30px",
                  backgroundColor: "lightgray",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "black",
                  marginRight: "3px",
                }}>
                {item.user}
              </div> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "lightgray",
                  textAlign: "center",
                }}>
                <span style={{ color: "blue" }}>{item.user}</span>
                <span style={{ color: "green" }}>
                  {item.coment}
                  <IconButton onClick={() => deleteComent(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </span>
              </div>
            </div>
          ))}
        </>
      ) : null}
      <div>
        <form
          onSubmit={e => handleAdd(e)}
          style={{ margin: "100px 200px", width: "100%" }}>
          <label style={{ fontSize: "18px", color: "white" }}>
            Оставить отзыв:
            <input
              onChange={e => setComent(e.target.value)}
              type="text"
              value={coment}
              style={{
                height: "20px",
                backgroundColor: "rgb(222, 220, 220)",
                borderRadius: "5px",
                outline: 0,
                padding: "20px 30px",
              }}
            />
          </label>
          <IconButton type="submit">{/* <SendIcon /> */}</IconButton>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default TicketDetails;
