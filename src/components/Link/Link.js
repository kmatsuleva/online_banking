import React from "react";
import styles from "./styles.js";

const Link = ({ href, links }) => (
  <li>
    {links.map(text => {
      return  <a href={href} style={styles.link}> { text } </a>
    })}
  </li>
);

export default Link;
