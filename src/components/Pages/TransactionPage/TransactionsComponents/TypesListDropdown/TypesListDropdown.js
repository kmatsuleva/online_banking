import React from "react";
import DropDownItem from "../../../../Common/DropdownItem/DropdownItem";
import styles from "./styles"

const operation = ["All", "Debosit", "Withdrawal"];

const TypesListDropdown = () => (
    <div style = {styles.container}>
        <DropDownItem items={operation}/>
    </div>
);


export default TypesListDropdown;
