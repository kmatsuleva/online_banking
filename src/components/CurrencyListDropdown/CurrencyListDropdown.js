import React from "react";
import DropDownItem from "../DropdownItem/DropdownItem";

const currency = ["BGN", "USD"];

const CurrencyListDropdown = () => (
    <DropDownItem items={currency} />
);

export default CurrencyListDropdown;
