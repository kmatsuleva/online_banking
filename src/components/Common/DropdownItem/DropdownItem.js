import React from 'react';
import PropTypes from 'prop-types';

const DropDownItem = ({ items = [], className }) => (
  <select className={className}>
    {items.map((value) => <option value={value}> {value} </option>)}
  </select>
);

DropDownItem.propTypes = {
	items: PropTypes.node.isRequired,
	className: PropTypes.string
};

export default DropDownItem;
