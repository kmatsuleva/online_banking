import React from "react";
import TypesListDropdown from "../TypesListDropdown/TypesListDropdown"
import styles from "../FromToDate/styles.js"


const DropdownTypes = () => (
    <div style={styles.container}>
        <label style={styles.label}>"Operation:</label>
        <TypesListDropdown />
    </div>
);

export default DropdownTypes;
 