import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import Logo from "../Logo/Logo"
import styles from "./styles.js"

const Menu = () => (
  <ul style={styles.ul}>
    <li style={styles.li}> 
          <Logo src={require('../../images/icon.png')} />
    </li>
    <MenuItem text = "individual clients" />
    <MenuItem text = "corporate clients" />
    <MenuItem text = "contacts" />
    <MenuItem text = "about us" />
    <MenuItem text = "online banking" />
  </ul>
);

export default Menu;
