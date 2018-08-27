import React from "react"
import Label from "../Label/Label"
import Input from "../Input/Input";
import CurrencyListDropdown from "../CurrencyListDropdown/CurrencyListDropdown";
import Button from "../Button/Button";
import styles from "./styles";


const AddNewAccount = () => (
    <div style={styles.wrapper}>
        <div style={styles.flexContainer}>
            <Label labelValue = "Account:" style={styles.label} />
            <Input style={styles.input} />
        </div>
        <div style={styles.flexContainer}>
            <Label labelValue = "Currency:" style={styles.label} /> 
            <CurrencyListDropdown />
        </div>
        <div style={styles.button}>
                    <Button btnValue = "Create" />
        </div>
    </div>
);

export default AddNewAccount;

