import React from "react";
import styles from "./styles.js"

const Form = ({ label }) => (
  <div>
      <label style={styles.form__Label} > {label} </label>
      <br />
      <input style={styles.form__Input} />
  </div>
);

export default Form;
