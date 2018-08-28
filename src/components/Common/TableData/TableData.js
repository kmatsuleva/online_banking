import React from "react";
import styles from "./styles"

const TableData = ({ items }) => (
    <tr>
        {items.map(item => {
            return <td style={styles.item}> {item} </td>
        })}
    </tr>
);

export default TableData;
 