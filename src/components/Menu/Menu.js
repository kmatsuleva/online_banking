import React from "react";
import styles from "./styles.js";
import Link from "../Link/Link"
import Logo from "../Logo/Logo"

// const Menu = () => (
//     <ul style={styles.ul}>
//         <li><Logo src={require('../../images/logo.png')} /> </li>
//         <li style={styles.li}><Link text = "individual clients"/></li>
//         <li style={styles.li}><Link text = "corporate clients"/></li>
//         <li style={styles.li}><Link text = "contacts"/></li>
//         <li style={styles.li}><Link text = "about us"/></li>
//         <li style={styles.li}><Link text = "online banking"/></li>
//     </ul>
// );


const text = ["individual clients", "corporate clients", "contacts", "about us", "online banking"]

const Menu = () => (
    <ul style={styles.ul}>
        <li><Logo src={require('../../images/logo.png')} /> </li>
        <Link href="#" links = {text}/>
    </ul>
);

export default Menu;
