import React from "react";
import styles from "./styles";
import Link from "../../Common//Link/Link"
import Logo from "../../Common/Logo/Logo"

const text = ["individual clients", "corporate clients", "contacts", "about us", "online banking"]

const Menu = () => (
    <ul style={styles.ul}>
        <li><Logo src={require('../../../images/logo.png')} /> </li>
        <Link to="#" links = {text} style={styles.link}/>
    </ul>
);

export default Menu;
