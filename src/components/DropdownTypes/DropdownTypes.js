import React from "react";
import Label from "../Label/Label";
import DropTypesList from "../DropTypesList/DropTypesList"
import styles from "../FromToDate/styles.js"


const Transaction = () => (
    <div style={styles.container}>
        <div style={styles.label}><Label labelValue = "Type:"/></div>
        <DropTypesList />
    </div>
);

export default Transaction;
 