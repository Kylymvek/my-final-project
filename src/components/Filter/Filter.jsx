import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import React from "react";

const Filter = ({ brand, setBrand, price, setPrice }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">По брендам</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={brand}
        onChange={e => setBrand(e.target.value)}>
        <div>
          <FormControlLabel value="Lenovo" control={<Radio />} label="Lenovo" />
          <FormControlLabel value="Asus" control={<Radio />} label="Asus" />
          <FormControlLabel value="Acer" control={<Radio />} label="Acer" />
          <FormControlLabel value="MSI" control={<Radio />} label="MSI" />
          <FormControlLabel value="HP" control={<Radio />} label="HP" />
          <FormControlLabel
            value="Gigabyte"
            control={<Radio />}
            label="Gigabyte"
          />
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="Все товары"
          />
        </div>
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label">По ценам</FormLabel>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={e => setPrice(e.target.value)}
        valueLabelDisplay="auto"
        min={0}
        max={300000}
      />
    </FormControl>
  );
};

export default Filter;
