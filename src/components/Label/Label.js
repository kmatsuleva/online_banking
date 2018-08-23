import React from "react";
import styles from "./styles.js"

const Label = ({ labelValue }) => (
  <div>
      <label style={styles.label} > {labelValue} </label>
  </div>
);

export default Label;
 