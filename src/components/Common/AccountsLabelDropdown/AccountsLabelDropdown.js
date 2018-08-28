import React from "react";
import AccountsListDropdown from "../../Pages/AccountsPage/AccountsComponents/AccountsListDropdown/AccountsListDropdown"
import styles from "../../Pages/TransactionPage/TransactionsComponents/FromToDate/styles.js"


const AccountLabelDropdown = () => (
    <div style={styles.container}>
        <label style={styles.label}>Account:</label>
        <AccountsListDropdown />
    </div>
);

export default AccountLabelDropdown;  