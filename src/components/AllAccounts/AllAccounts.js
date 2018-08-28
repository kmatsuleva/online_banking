import React from "react"
import TableHeader from "../TableHeader/TableHeader"
import TableData from "../TableData/TableData"

const headers = ["account", "balance"];
const td = ["BG56BUIN65431544786321", "676 EUR"]

const AllAccounts = () => (
    <table>
        <TableHeader items = {headers} />
        <TableData items = {td} />
    </table>
);

export default AllAccounts;
