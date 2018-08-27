import React from "react";
import styles from "./styles.js";
import Link from "../Link/Link"
import Logo from "../Logo/Logo"

const text = ["individual clients", "corporate clients", "contacts", "about us", "online banking"]

const Menu = () => (
    <ul style={styles.ul}>
        <li><Logo src={require('../../images/logo.png')} /> </li>
        <Link to="#" links = {text}/>
    </ul>
);

export default Menu;
