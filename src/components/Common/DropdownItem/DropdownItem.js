import React from "react";
import PropTypes from 'prop-types';   

const DropDownItem = ({ items = [] , dropdownMenu }) => (
    <select style={dropdownMenu}>
      {items.map(value => {
        return <option value={value}>{value}</option>;
      })}
    </select>
);


DropDownItem.propTypes = {
  items: PropTypes.node.isRequired    
};

DropDownItem.defaultProps = {
  dropdownMenu: {
      border: "1px solid #d2d2d2",
      padding: "18px 10px",
      marginTop: 8,
      marginBottom: 25,
      borderRadius: 3,
      fontSize: 16,
      color: "#4a4a4a",
      backgroundColor: "white",
      boxShadow: "inset 1px 1px 2px rgba(0, 0, 0, 0.2)",
      fontFamily: "Roboto, Arial, sans-serif"
  }
}


export default DropDownItem;

