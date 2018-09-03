import React from "react";

const DropDownItem = ({ items }) => (
    <select>
      {items.map(value => {
        return <option value={value}>{value}</option>;
      })}
    </select>
);

export default DropDownItem;

