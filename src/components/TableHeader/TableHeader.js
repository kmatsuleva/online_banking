import React from "react";
import styles from "./styles"

const TableHeader = ({ items }) => (
    <tr>
        {items.map(item => {
            return <th style={styles.column}> {item} </th>
        })}
    </tr>
);

export default TableHeader;
 