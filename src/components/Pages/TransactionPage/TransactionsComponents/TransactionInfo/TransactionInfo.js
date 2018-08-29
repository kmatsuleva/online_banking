import React from "react";
import TableHeader from "../../../../Common/TableHeader/TableHeader"
import TableData from "../../../../Common/TableData/TableData"
import styles from "./styles"

const headers = [ "date and time", "account", "operation", "amount"];
const items = ["test1", "test2", "test3", "test4"];

const TransactionInfo = () => (
    <table style={styles.table}>
        <TableHeader items = {headers} />
        <TableData items = {items}/>
        <TableData items = {items}/>
        <TableData items = {items}/>
        <TableData items = {items}/>
        <TableData items = {items}/>
        <TableData items = {items}/>
    </table>
);

export default TransactionInfo;
 
