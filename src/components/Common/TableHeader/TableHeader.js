import React from "react";
import PropTypes from 'prop-types'; 

const TableHeader = ({ items, className }) => (
    <tr>
        {items.map(item => <th className={className}> {item} </th> )}
    </tr>
);

TableHeader.propTypes = {
    items: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default TableHeader;
 