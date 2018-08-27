import React from "react";
import DropDownItem from "../DropdownItem/DropdownItem";
import styles from "./styles"

const types = ["all", "Debits", "Withdrawals"];

const TypesListDropdown = () => (
    <div style = {styles.container}>
        <DropDownItem items={types}/>
    </div>
);


export default TypesListDropdown;
