import React from "react";
import styles from "../Menu/styles";
import Link from "../Link/Link"
import Logo from "../Logo/Logo"

const listItem = ["accounts", "transactions", "deposits", "contacts", "settings", "log out"]


const TransactionMenu = () => (
    <ul style={styles.ul}>
        <li><Logo src={require('../../images/logo.png')} /> </li>
        <li><Link to="#" links = {listItem} style={styles.link}/></li>
    </ul>
);

export default TransactionMenu;
 