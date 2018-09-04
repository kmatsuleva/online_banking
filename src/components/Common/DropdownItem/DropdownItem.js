import React from "react";
import styles from "./styles"

const DropDownItem = ({ items }) => (
    <select style={styles.dropdownMenu}>
      {items.map(value => {
        return <option value={value}>{value}</option>;
      })}
    </select>
);

export default DropDownItem;

