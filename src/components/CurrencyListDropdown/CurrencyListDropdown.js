import React from "react";
import DropDownItem from "../DropdownItem/DropdownItem";

const currency = ["BGN", "USD"];

const CurrencyListDropdown = () => (
  <div>
    <DropDownItem items={currency} />
  </div>
);

export default CurrencyListDropdown;
