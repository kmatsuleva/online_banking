import React from "react";
import DropDownItem from "../DropdownItem/DropdownItem";
import styles from "./styles"

const types = ["all", "Debits", "Credits"];

const DropTypesList = () => (
    <div style = {styles.container}>
        <DropDownItem items={types}/>
    </div>
);


export default DropTypesList;
