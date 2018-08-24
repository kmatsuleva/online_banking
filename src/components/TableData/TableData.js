import React from "react";
import styles from "./styles"

const TableData = ({ items }) => (
    <tr>
        {items.map(item => {
            return <td style={styles.column}> {item} </td>
        })}
    </tr>
);

export default TableData;
 