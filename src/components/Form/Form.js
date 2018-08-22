import React from "react";
import styles from "./styles.js"

const Form = ({ label }) => (
  <div>
    <form action="#" style={styles.form}>
      <label style={styles.form__Label} > {label} </label>
      <br />
      <input style={styles.form__Input} />
    </form>
  </div>
);

export default Form;
