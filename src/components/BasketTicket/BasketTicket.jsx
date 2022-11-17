import React, { useContext, useEffect } from "react";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { basketContext } from "../../context/BasketContextProvider";
import Navbar from "../HomePage/Navbar/Navbar";

const BasketTicket = () => {
  const { ticketsInBasket, getBasket, changeTicketCount, deleteBasketTicket } =
    useContext(basketContext);

  useEffect(() => {
    getBasket();
  }, []);
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Typography variant="h3">My Basket</Typography>
        {ticketsInBasket ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Liga</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Team 1</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Team 2</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Count</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>SubPrice</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ticketsInBasket.tickets.map((elem) => (
                    <TableRow key={elem.item.id}>
                      <TableCell>{elem.item.liga}</TableCell>
                      <TableCell>
                        <img
                          src={elem.item.firstTeamLogo}
                          alt="ligaLogo"
                          width={40}
                        />
                      </TableCell>{" "}
                      <TableCell>
                        <img
                          src={elem.item.secondTeamLogo}
                          alt="ligaLogo"
                          width={40}
                        />
                      </TableCell>
                      <TableCell>{elem.item.price}</TableCell>
                      <TableCell>
                        <input
                          min="1"
                          type="number"
                          style={{ width: "40px" }}
                          value={elem.count}
                          onChange={(e) =>
                            changeTicketCount(elem.item.id, e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell>{elem.subPrice} €</TableCell>
                      <TableCell
                        onClick={() => deleteBasketTicket(elem.item.id)}
                      >
                        <DeleteOutlineIcon className="deleteIconBasket" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant="contained" sx={{ margin: "20px auto" }}>
              Buy now for {ticketsInBasket.totalPrice} €
            </Button>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
    </>
  );
};

export default BasketTicket;
