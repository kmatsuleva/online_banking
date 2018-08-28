import React from "react"
import CurrencyListDropdown from "../CurrencyListDropdown/CurrencyListDropdown";
import PrimaryButton from "../../../../Common/PrimaryButton/PrimaryButton";
import styles from "./styles";

const AddNewAccount = () => (
    <div style={styles.container}>
            <label style={styles.label}>Account: </label>
            <input type="text" style={styles.input} />
            <label style={styles.label}>Currency: </label>
            <CurrencyListDropdown />
            <div style={styles.button}>
                <PrimaryButton btnValue = "Create" />
            </div>
    </div>
);

export default AddNewAccount;