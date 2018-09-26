import React from "react";
import Logo from "../../Common/Logo/Logo"
import "./styles.css"
import MenuItem from "../MenuItem/MenuItem";

const text = ["individual clients", "corporate clients", "contacts", "about us", "online banking"]

const Menu = () => (
   <ul className="menuList">
        <li className="menuLogo"><Logo src={require('../../../images/logo.png')} to="/login" alt="logo" className="logoImg" /> </li>
        <MenuItem items = {text} to='#' className="menuLink"/>
    </ul>
);

export default Menu;
