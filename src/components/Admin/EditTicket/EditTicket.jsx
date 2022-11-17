import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ticketContext } from "../../../context/TicketContextProvider";

const EditTicket = () => {
  const { ticketDetails, readOneTicket, editTicket } =
    useContext(ticketContext);

  const [inpValues, setInpValues] = useState(ticketDetails);

  const { id } = useParams();

  useEffect(() => {
    readOneTicket(id);
  }, [id]);

  useEffect(() => {
    setInpValues(ticketDetails);
  }, [ticketDetails]);

  function handleChange(e) {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  }

  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (
      !inpValues.liga.trim() ||
      !inpValues.ligaLogo.trim() ||
      !inpValues.firstTeamLogo.trim() ||
      !inpValues.secondTeamLogo.trim() ||
      !inpValues.firstTeamName.trim() ||
      !inpValues.secondTeamName.trim() ||
      !inpValues.date.trim() ||
      !inpValues.location.trim() ||
      !inpValues.price ||
      !inpValues.description.trim() ||
      !inpValues.stadiumPhoto.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    editTicket(id, inpValues);
    navigate("/");
  }

  return (
    <>
      {inpValues ? (
        <div className="addTicket-container">
          <h2 id="add-title">Редактирование билета</h2>
          <form id="form-add" onSubmit={e => handleSave(e)}>
            <input
              className="outlined-basic"
              placeholder="Лига"
              variant="outlined"
              value={inpValues.liga}
              name="liga"
              onChange={e => handleChange(e)}
            />
            <input
              className="outlined-basic"
              placeholder="Лого лиги"
              variant="outlined"
              value={inpValues.ligaLogo}
              name="ligaLogo"
              onChange={e => handleChange(e)}
            />
            <input
              className="outlined-basic"
              placeholder="Лого первой команды"
              variant="outlined"
              value={inpValues.firstTeamLogo}
              name="firstTeamLogo"
              onChange={e => handleChange(e)}
            />
            <input
              className="outlined-basic"
              placeholder="Лого второй команды"
              variant="outlined"
              value={inpValues.secondTeamLogo}
              name="secondTeamLogo"
              onChange={e => handleChange(e)}
            />
            <input
              className="outlined-basic"
              placeholder="Название первой команды"
              variant="outlined"
              value={inpValues.firstTeamName}
              name="firstTeamName"
              onChange={e => handleChange(e)}
            />
            <input
              className="outlined-basic"
              placeholder="Название второй команды"
              variant="outlined"
              value={inpValues.secondTeamName}
              name="secondTeamName"
              onChange={e => handleChange(e)}
            />
            <input
              type="number"
              className="outlined-basic"
              placeholder="Цена"
              variant="outlined"
              value={inpValues.price}
              name="price"
              onChange={e => handleChange(e)}
            />
            <input
              className="outlined-basic"
              placeholder="Дата"
              variant="outlined"
              value={inpValues.date}
              name="date"
              onChange={e => handleChange(e)}
            />
            <input
              className="outlined-basic"
              placeholder="Локация"
              variant="outlined"
              value={inpValues.location}
              name="location"
              onChange={e => handleChange(e)}
            />
            <input
              className="outlined-basic"
              placeholder="Описание"
              variant="outlined"
              value={inpValues.description}
              name="description"
              onChange={e => handleChange(e)}
            />
            <input
              className="outlined-basic"
              placeholder="Фото стадиона"
              variant="outlined"
              value={inpValues.stadiumPhoto}
              name="stadiumPhoto"
              onChange={e => handleChange(e)}
            />
            <Button variant="contained" type="submit">
              Сохранить
            </Button>
          </form>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
};

export default EditTicket;
