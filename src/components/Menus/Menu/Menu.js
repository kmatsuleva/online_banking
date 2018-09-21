import React from "react";
import Logo from "../../Common/Logo/Logo"
import "./styles.css"
import MenuItem from "../MenuItem/MenuItem";

const text = ["individual clients", "corporate clients", "contacts", "about us", "online banking"]

const Menu = () => (
   <ul>
        <li className="logo"><Logo src={require('../../../images/logo.png')} to="/login" alt="logo" className="image" /> </li>
        <MenuItem items = {text} to='#'/>
    </ul>
);

export default Menu;
