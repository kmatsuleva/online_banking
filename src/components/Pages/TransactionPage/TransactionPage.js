import React from "react";
import OnlineBankingMenu from '../../Menus/OnlineBankingMenu/OnlineBankingMenu';
import AccountsLabelDropdown from "../../Common/AccountsLabelDropdown/AccountsLabelDropdown"
import FromToDate from './TransactionsComponents/FromToDate/FromToDate'
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton";
import TypesLabelDropdown from "./TransactionsComponents/TypesLabelDropdown/TypesLabelDropdown"
import styles from "./styles.js"
import AccountsListTable from "./TransactionsComponents/TransactionInfo/TransactionInfo"

const Transaction = () => (
    <div>
        <OnlineBankingMenu />
            <div style={styles.container}>
               <AccountsLabelDropdown />
                <FromToDate />
                <TypesLabelDropdown />
                <div style={styles.button}>
                    <PrimaryButton btnValue = "Show" />
                </div>
            </div>
            <div style={styles.table}>
                <AccountsListTable />
            </div>
    </div>
);

export default Transaction;
 