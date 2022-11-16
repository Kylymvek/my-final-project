import React, { useContext, useEffect } from "react";
import RMIcon from "./imagesTicketDetails/header_logo.svg.svg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./TicketDetails.css";
import { Button } from "@mui/material";
import { ticketContext } from "../../../context/TicketContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const TicketDetails = () => {
  const { readOneTicket, ticketDetails, deleteTicket } =
    useContext(ticketContext);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    readOneTicket(id);
  }, [id]);

  return (
    <>
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
                    {ticketDetails.firstTeamName} -{" "}
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
                    <p>
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
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TicketDetails;
