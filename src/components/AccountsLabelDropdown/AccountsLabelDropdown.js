import React from "react";
import Label from "../Label/Label";
import AccountsListDropdown from "../AccountsListDropdown/AccountsListDropdown"
import styles from "../FromToDate/styles.js"


const AccountLabelDropdown = () => (
    <div style={styles.container}>
        <div style={styles.label}><Label labelValue = "Account:"/></div>
        <AccountsListDropdown />
    </div>
);

export default AccountLabelDropdown;  