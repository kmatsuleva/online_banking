import React from "react";
import { NavLink } from 'react-router-dom'; 
import styles from "../Menu/styles";
import Link from "../Link/Link"
import Logo from "../Logo/Logo"

const listItem = ["accounts", "transactions", "operations", "contacts", "settings", "log out"]
const to = ["/accounts"]

const TransactionMenu = () => (
    <ul style={styles.ul}>
        <li><Logo src={require('../../images/logo.png')} /> </li>
        <li><Link to={to} links = {listItem} style={styles.link}/></li>
    </ul>
);

export default TransactionMenu;
 