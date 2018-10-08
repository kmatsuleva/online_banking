import React from "react";
import PropTypes from 'prop-types';   

const DropDownItem = ({ items = [] , className }) => (
    <select className={className}>
      {items.map(value => {
        return <option value={value}>{value}</option>;
      })}
    </select>
);


DropDownItem.propTypes = {
  items: PropTypes.node.isRequired    
};


export default DropDownItem;

