import React from "react";
import TransactionMenu from '../TransactionMenu/TransactionMenu';
import Label from "../Label/Label";
import InputDate from '../InputTypeDate/InputDate'
import Button from "../Button/Button";



const Transaction = () => (
    <div>
        <TransactionMenu />
        <Label labelValue = "Account:"/>
        <Label labelValue = "From:"/>
        <InputDate />
        <Label labelValue = "To:"/>
        <InputDate />
        <Label labelValue = "Type:"/>
 
        <Button btnValue = "Show" />
    </div>
);

export default Transaction;
