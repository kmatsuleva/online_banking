import React from "react";
import "../Menu/styles.css";
import Logo from "../../Common/Logo/Logo"
import MenuItem from "../MenuItem/MenuItem";

const text = ["accounts", "transaction", "operations", "settings", "contacts", "log out"]

const OnlineBankingMenu = () => (
    <ul>
        <li className="logo"><Logo src={require('../../../images/logo.png')} to="/login" alt="logo" className="image" /> </li>
        <MenuItem items = {text} to='#'/>
    </ul>
);

export default OnlineBankingMenu;
 