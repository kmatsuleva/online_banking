import React from "react";
import PropTypes from 'prop-types';     
import styles from "./styles"

const DropDownItem = ({ items }) => (
    <select style={styles.dropdownMenu}>
      {items.map(value => {
        return <option value={value}>{value}</option>;
      })}
    </select>
);


DropDownItem.propTypes = {
  items: PropTypes.element      
};


export default DropDownItem;

