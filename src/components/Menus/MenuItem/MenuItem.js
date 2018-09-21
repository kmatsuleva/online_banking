import React from "react";

const MenuItem = ({items = [], to}) => {
    return  items.map(text => (
        <li> <a href={to} className="link"> {text}</a></li>
    ))
}

export default MenuItem;

