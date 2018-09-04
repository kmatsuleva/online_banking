import React from "react";
import PropTypes from 'prop-types';     
import styles from "./styles"

const TableHeader = ({ items }) => (
    <tr>
        {items.map(item => {
            return <th style={styles.column}> {item} </th>
        })}
    </tr>
);

TableHeader.propTypes = {
    items: PropTypes.element     
};

export default TableHeader;
 