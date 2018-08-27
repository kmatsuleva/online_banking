import React from "react"
import Label from "../Label/Label"
import Input from "../Input/Input";
import CurrencyListDropdown from "../CurrencyListDropdown/CurrencyListDropdown";
import Button from "../Button/Button";
import styles from "../AddNewAccount/styles";


const AddNewAccount = () => (
    <div>
        <div style={styles.flexContainer}>
            <Label labelValue = "Account:" />
            <Input />
        </div>
        <div style={styles.flexContainer}>
            <Label labelValue = "Currency:" /> 
            <CurrencyListDropdown />
        </div>
        <Button btnValue = "Create" />
    </div>
);

export default AddNewAccount;

