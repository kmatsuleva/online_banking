import React from "react";
import styles from "./styles.js"

const RequiredField = ({ text }) => (
  <div>
    <span style={styles.span}> {text} </span>
  </div>
);

export default RequiredField;
