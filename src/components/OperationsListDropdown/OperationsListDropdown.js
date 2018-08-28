import React from "react";
import DropDownItem from "../DropdownItem/DropdownItem";

const operation = ["Debosit", "Withdrawal"];

const OperationsListDropdown = () => (
    <div>
        <DropDownItem items={operation}/>
    </div>
);


export default OperationsListDropdown;
