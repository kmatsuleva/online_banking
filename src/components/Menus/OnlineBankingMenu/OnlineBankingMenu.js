import React from "react";
import "./styles.css";
import Logo from "../../Common/Logo/Logo"
import MenuItem from "../MenuItem/MenuItem";

const text = ["accounts", "transaction", "operations", "settings", "log out"]

const OnlineBankingMenu = () => (
    <ul className="onlineMenu">
        <li className="logo"><Logo src={require('../../../images/logo.png')} to="/login" alt="logo" className="image" /> </li>
        <MenuItem items = {text} to='#' className="link"/>
    </ul>
);

export default OnlineBankingMenu;
 