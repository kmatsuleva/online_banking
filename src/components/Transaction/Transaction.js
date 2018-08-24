import React from "react";
import TransactionMenu from '../TransactionMenu/TransactionMenu';
import DropdownAccounts from "../DropdownAccounts/DropdownAccounts"
import FromToDate from '../FromToDate/FromToDate'
import Button from "../Button/Button";
import DropdownTypes from "../DropdownTypes/DropdownTypes"
import styles from "./styles.js"


const Transaction = () => (
    <div style={styles.container}>
        <TransactionMenu />
        <DropdownAccounts />
        <FromToDate />
        <DropdownTypes />
        <div style={styles.button}>
            <Button btnValue = "Show" />
        </div>
    </div>
);

export default Transaction;
 