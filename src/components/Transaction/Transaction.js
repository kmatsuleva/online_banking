import React from "react";
import TransactionMenu from '../TransactionMenu/TransactionMenu';
import DropdownAccounts from "../DropdownAccounts/DropdownAccounts"
import FromToDate from '../FromToDate/FromToDate'
import Button from "../Button/Button";
import DropdownTypes from "../DropdownTypes/DropdownTypes"
import styles from "./styles.js"
import Table from "../Table/Table"

const Transaction = () => (
    <div>
        <TransactionMenu />
            <div style={styles.container}>
                <DropdownAccounts />
                <FromToDate />
                <DropdownTypes />
                <div style={styles.button}>
                    <Button btnValue = "Show" />
                </div>
            </div>
            <div style={styles.table}>
                <Table />
            </div>
    </div>
);

export default Transaction;
 