import React from "react";
import styles from "./styles.js";

const Button = ({ btnValue }) => (
  <button style={styles.button}>{btnValue}</button>
);

export default Button;
