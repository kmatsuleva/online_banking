import React from "react";
import PropTypes from 'prop-types';     


const TableData = ({ items, style }) => (
    <tr>
        {items.map(item => {
            return <td style={style}> {item} </td>
        })}
    </tr>
);


TableData.propTypes = {
    items: PropTypes.element,
    style: PropTypes.object     
};

export default TableData;
 