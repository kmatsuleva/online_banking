import React from "react";
import styles from "../Menu/styles";
import Link from "../../Common/Link/Link"
import Logo from "../../Common/Logo/Logo"

const listItem = ["accounts", "transactions", "operations", "contacts", "settings", "log out"]
const to = ["/accounts"]

const TransactionMenu = () => (
    <ul style={styles.ul}>
        <li><Logo src={require('../../../images/logo.png')} to="/" alt="logo" /> </li>
        <Link to={to} links = {listItem} style={styles.link}/>
    </ul>
);

export default TransactionMenu;
 