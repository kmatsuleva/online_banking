import React from "react";
import TransactionMenu from '../TransactionMenu/TransactionMenu';
import Label from "../Label/Label";
import DropAccountsList from "../DropAccountsList/DropAccountsList"
import FromToDate from '../FromToDate/FromToDate'
import Button from "../Button/Button";
import DropTypesList from "../DropTypesList/DropTypesList"
import styles from "./styles.js"


const Transaction = () => (
    <div style={styles.container}>
        <TransactionMenu />
        <Label labelValue = "Account:"/>
        <DropAccountsList />
        <FromToDate />
        <Label labelValue = "Type:"/>
        <DropTypesList />
        <Button btnValue = "Show" />
    </div>
);

export default Transaction;
 