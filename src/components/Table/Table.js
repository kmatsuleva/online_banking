import React from "react";
import TableHeader from "../TableHeader/TableHeader"
import TableData from "../TableData/TableData"
import styles from "./styles"

const headers = [ "date", "payments", "receipts", "type"];
const items = ["test1", "test2", "test3", "test4"];

const Table = () => (
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

export default Table;
 
