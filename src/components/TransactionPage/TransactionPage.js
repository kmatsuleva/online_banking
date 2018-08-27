import React from "react";
import OnlineBankingMenu from '../OnlineBankingMenu/OnlineBankingMenu';
import AccountsLabelDropdown from "../AccountsLabelDropdown/AccountsLabelDropdown"
import FromToDate from '../FromToDate/FromToDate'
import Button from "../Button/Button";
import TypesLabelDropdown from "../TypesLabelDropdown/TypesLabelDropdown"
import styles from "./styles.js"
import Table from "../Table/Table"

const Transaction = () => (
    <div>
        <OnlineBankingMenu />
            <div style={styles.container}>
               <AccountsLabelDropdown />
                <FromToDate />
                <TypesLabelDropdown />
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
 