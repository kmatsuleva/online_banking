import React from "react";

const MenuItem = ({reference, className, title}) => {
    return <li> 
                <a href={reference} className={className}>
                    { title }
                </a>
        </li>;
}

export default MenuItem;

