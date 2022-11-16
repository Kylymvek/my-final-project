import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { ticketContext } from "../../../context/TicketContextProvider";

import "./AddTicket.css";

const AddTicket = () => {
  const [liga, setLiga] = useState("");
  const [ligaLogo, setLigaLogo] = useState("");
  const [firstTeamLogo, setFirstTeamLogo] = useState("");
  const [secondTeamLogo, setSecondTeamLogo] = useState("");
  const [firstTeamName, setFirstTeamName] = useState("");
  const [secondTeamName, setSecondTeamName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stadiumPhoto, setStadiumPhoto] = useState("");

  const { addTicket } = useContext(ticketContext);

  function handleAdd(e) {
    e.preventDefault(); //останавливает автообновление form

    if (
      !liga.trim() ||
      !ligaLogo.trim() ||
      !firstTeamLogo.trim() ||
      !secondTeamLogo.trim() ||
      !firstTeamName.trim() ||
      !secondTeamName.trim() ||
      !date.trim() ||
      !location.trim() ||
      !price.trim() ||
      !description.trim() ||
      !stadiumPhoto.trim()
    ) {
      alert("Заполните поля!");
      return;
    }

    let ticketObj = {
      liga,
      ligaLogo,
      firstTeamLogo,
      secondTeamLogo,
      firstTeamName,
      secondTeamName,
      date,
      location,
      price: +price,
      description,
      stadiumPhoto,
    };

    addTicket(ticketObj);
    setLiga("");
    setLigaLogo("");
    setFirstTeamLogo("");
    setSecondTeamLogo("");
    setFirstTeamName("");
    setSecondTeamName("");
    setDate("");
    setLocation("");
    setDescription("");
    setPrice(0);
    setStadiumPhoto("");
  }

  return (
    <div className="addTicket-container">
      <h2 id="add-title">Добавление билета</h2>
      <form id="form-add" onSubmit={e => handleAdd(e)}>
        <input
          className="outlined-basic"
          placeholder="Лига"
          variant="outlined"
          value={liga}
          onChange={e => setLiga(e.target.value)}
        />
        <input
          className="outlined-basic"
          placeholder="Лого лиги"
          variant="outlined"
          value={ligaLogo}
          onChange={e => setLigaLogo(e.target.value)}
        />
        <input
          className="outlined-basic"
          placeholder="Лого первой команды"
          variant="outlined"
          value={firstTeamLogo}
          onChange={e => setFirstTeamLogo(e.target.value)}
        />
        <input
          className="outlined-basic"
          placeholder="Лого второй команды"
          variant="outlined"
          value={secondTeamLogo}
          onChange={e => setSecondTeamLogo(e.target.value)}
        />
        <input
          className="outlined-basic"
          placeholder="Название первой команды"
          variant="outlined"
          value={firstTeamName}
          onChange={e => setFirstTeamName(e.target.value)}
        />
        <input
          className="outlined-basic"
          placeholder="Название второй команды"
          variant="outlined"
          value={secondTeamName}
          onChange={e => setSecondTeamName(e.target.value)}
        />
        <input
          type="number"
          className="outlined-basic"
          placeholder="Цена"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <input
          className="outlined-basic"
          placeholder="Дата"
          variant="outlined"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <input
          className="outlined-basic"
          placeholder="Локация"
          variant="outlined"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <input
          className="outlined-basic"
          placeholder="Описание"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          className="outlined-basic"
          placeholder="Фото стадиона"
          variant="outlined"
          value={stadiumPhoto}
          onChange={e => setStadiumPhoto(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Добавить
        </Button>
      </form>
      {/* <TextField
          className="outlined-basic"
          label="Лига"
          variant="outlined"
          value={liga}
          onChange={e => setLiga(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Лого первой команды"
          variant="outlined"
          value={firstTeamLogo}
          onChange={e => setFirstTeamLogo(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Лого второй команды"
          variant="outlined"
          value={secondTeamLogo}
          onChange={e => setSecondTeamLogo(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Название первой команды"
          variant="outlined"
          value={firstTeamName}
          onChange={e => setFirstTeamName(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Название второй команды"
          variant="outlined"
          value={secondTeamName}
          onChange={e => setSecondTeamName(e.target.value)}
        />
        <TextField
          type="number"
          className="outlined-basic"
          label="Цена"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Дата"
          variant="outlined"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Локация"
          variant="outlined"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Описание"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Фото стадиона"
          variant="outlined"
          value={stadiumPhoto}
          onChange={e => setStadiumPhoto(e.target.value)}
        /> */}
    </div>
  );
};

export default AddTicket;
