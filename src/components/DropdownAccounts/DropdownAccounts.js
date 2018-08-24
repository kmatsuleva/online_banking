import React from "react";
import Label from "../Label/Label";
import DropAccountsList from "../DropAccountsList/DropAccountsList"
import styles from "../FromToDate/styles.js"


const DropdownAccounts = () => (
    <div style={styles.container}>
        <div style={styles.label}><Label labelValue = "Account:"/></div>
        <DropAccountsList />
    </div>
);

export default DropdownAccounts;  