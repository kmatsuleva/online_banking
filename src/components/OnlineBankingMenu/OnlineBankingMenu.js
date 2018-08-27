import React from "react";
import styles from "../Menu/styles";
import Link from "../Link/Link"
import Logo from "../Logo/Logo"

const listItem = ["accounts", "transactions", "deposits", "contacts", "settings", "log out"]
// const directions = ["/accounts", "/transactions", "/deposits", "/contacts", "/settings", "/log_out"];



const TransactionMenu = () => (
    <ul style={styles.ul}>
        <li><Logo src={require('../../images/logo.png')} /> </li>
        <Link to="#" links = {listItem}/>
    </ul>
);

export default TransactionMenu;
 