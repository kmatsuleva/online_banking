import React from "react";

const TableData = ({ items, style }) => (
    <tr>
        {items.map(item => {
            return <td style={style}> {item} </td>
        })}
    </tr>
);

export default TableData;
 