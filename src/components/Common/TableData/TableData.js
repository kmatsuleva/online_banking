import React from "react";
import PropTypes from 'prop-types';     


const TableData = ({ items, className }) => (
    <tr>
        {items.map(item => {
            return <td className={className}> {item} </td>
        })}
    </tr>
);


TableData.propTypes = {
    items: PropTypes.node,
    style: PropTypes.object     
};

export default TableData;
 