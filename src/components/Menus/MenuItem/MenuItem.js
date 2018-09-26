import React from "react";

const MenuItem = ({items = [], to, className}) => {
    return  items.map(text => (
        <li> <a href={to} className={className}> {text}</a></li>
    ))
}

export default MenuItem;

