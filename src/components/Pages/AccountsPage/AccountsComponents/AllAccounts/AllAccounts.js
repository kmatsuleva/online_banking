import React from "react"
import TableHeader from "../../../../Common/TableHeader/TableHeader"
import TableData from "../../../../Common/TableData/TableData"

const headers = ["account", "balance"];
const td = ["BG56BUIN65431544786321", "676 EUR"]

const AllAccounts = () => (
    <table>
        <TableHeader items = {headers} />
        <TableData items = {td} />
    </table>
);

export default AllAccounts;
