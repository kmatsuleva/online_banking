import React from "react";

const TableData = ({ items }) => (
    <tr>
        {items.map(item => {
            return <td> {item} </td>
        })}
    </tr>
);

export default TableData;
 