import React from "react";
import styles from "./styles.js";

const Link = ({ to, links }) => (
  <li>
    {links.map(text => {
      return  <a href={to} style={styles.link}> { text } </a>
    })}
  </li>
);

export default Link;
