import React from "react";
import PropTypes from 'prop-types'; 

const TableHeader = ({ items, className }) => (
    <tr>
        {items.map(item => {
            return <th className={className}> {item} </th>
        })}
    </tr>
);

TableHeader.propTypes = {
    items: PropTypes.node     
};

export default TableHeader;
 