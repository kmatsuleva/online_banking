import React from "react";
import { Link } from 'react-router-dom'
import "../Menu/styles.css";
import Logo from "../../Common/Logo/Logo"


const TransactionMenu = () => (
    <ul>
        <li><Logo src={require('../../../images/logo.png')} to="/login" alt="logo"/> </li>
        <li><Link to="/accounts" className="link">accounts </Link></li>
        <li><Link to="/transaction" className="link">transactions</Link></li>
        <li><Link to="/operations" className="link">operations </Link></li>
        <li><Link to="#" className="link">settings </Link></li>
        <li><Link to="#" className="link">contacts </Link></li>
        <li><Link to="#" className="link">log out </Link> </li>
    </ul>
);

export default TransactionMenu;
 