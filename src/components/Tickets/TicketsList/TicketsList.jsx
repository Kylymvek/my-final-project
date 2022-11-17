import { Filter } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Pagination,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ticketContext } from "../../../context/TicketContextProvider";
import Footer from "../../HomePage/Footer/Footer";
import Navbar from "../../HomePage/Navbar/Navbar";
import TicketCard from "../TicketCard/TicketCard";
import "./TicketsList.css";

const TicketsList = () => {
  const { readTicket, ticketsArr, pageTotalCount } = useContext(ticketContext);
  console.log(ticketsArr);
  useEffect(() => {
    readTicket();
  }, []);

  const [paramsSearch, setParamsSearch] = useSearchParams();
  const [firstTeamName, setFirstTeamName] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (firstTeamName === "all") {
      setParamsSearch({
        q: paramsSearch.get("q") || "",
        _page: page,
        _limit: 4,
      });
    } else {
      setParamsSearch({
        firstTeamName: firstTeamName,
        _page: page,
        _limit: 4,
      });
    }
  }, [paramsSearch, setFirstTeamName, page]);

  return (
    <>
      <div className="ticket-cards">
        {ticketsArr ? (
          ticketsArr.map(item => <TicketCard item={item} key={item.id} />)
        ) : (
          <h1 style={{ color: "white" }}>loading...</h1>
        )}
      </div>
      <Grid
        sx={{
          width: "30%",
          display: "flex",
          justifyContent: "center",
        }}
        mx="auto"
        my="10px">
        <Pagination
          count={+pageTotalCount}
          color="warning"
          page={+page}
          onChange={(e, value) => setPage(value)}
          style={{
            backgroundColor: "rgb(245 245 229 / 86%)",
            borderRadius: "30px",
          }}
        />
      </Grid>
    </>
  );
};

export default TicketsList;
