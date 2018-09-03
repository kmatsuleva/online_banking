import React from "react";
import styles from "./styles.js";

const Button = ({ btnValue, to }) => (
  <button style={styles.button}>
    <a href={to} style={styles.link_button}> {btnValue} </a>
  </button>
);

export default Button;
