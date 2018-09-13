import React from "react";
import { Link } from 'react-router-dom'
import "../Menu/styles.css";
import Logo from "../../Common/Logo/Logo"


const TransactionMenu = () => (
    <ul>
        <li><Logo src={require('../../../images/logo.png')} to="/login" alt="logo"/> </li>
        <Link to="/accounts" className="link">accounts </Link>
        <Link to="/transaction" className="link">transactions</Link>
        <Link to="/operations" className="link">operations </Link>
        <Link to="#" className="link">settings </Link>
        <Link to="#" className="link">contacts </Link>
        <Link to="#" className="link">log out </Link>  
    </ul>
);

export default TransactionMenu;
 