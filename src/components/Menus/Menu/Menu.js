import React from "react";
import Link from "../../Common//Link/Link"
import Logo from "../../Common/Logo/Logo"
import "./styles.css"

const text = ["individual clients", "corporate clients", "contacts", "about us", "online banking"]

const Menu = () => (
    <ul>
        <li><Logo src={require('../../../images/logo.png')} to="/login" alt="logo"/> </li>
        <li><Link to="#" links = {text} className="link"/></li>
    </ul>
);

export default Menu;
