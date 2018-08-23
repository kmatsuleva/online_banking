import React from "react";
import styles from "../Menu/styles.js";
import Link from "../Link/Link"
import Logo from "../Logo/Logo"

const listItem = ["accounts", "transactions", "deposits", "contacts", "settings", "log out"]

const TransactionMenu = () => (
    <ul style={styles.ul}>
        <li><Logo src={require('../../images/logo.png')} /> </li>
        <li style={styles.li}><Link text = "accounts"/></li>        
        <li style={styles.li}><Link text = "transactions"/></li>
        <li style={styles.li}><Link text = "deposits"/></li>
        <li style={styles.li}><Link text = "contacts"/></li>
        <li style={styles.li}><Link text = "settings"/></li>
        <li style={styles.li}><Link text = "log out"/></li>
    </ul>
);

export default TransactionMenu;
