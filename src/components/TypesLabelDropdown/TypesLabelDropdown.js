import React from "react";
import Label from "../Label/Label";
import TypesListDropdown from "../TypesListDropdown/TypesListDropdown"
import styles from "../FromToDate/styles.js"


const DropdownTypes = () => (
    <div style={styles.container}>
        <div style={styles.label}><Label labelValue = "Type:"/></div>
        <TypesListDropdown />
    </div>
);

export default DropdownTypes;
 