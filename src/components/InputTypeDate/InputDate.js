import React from "react";
import styles from "./styles"

const InputDate = ( {min} ) => (
      <input type="date" min={min}
            style = {styles.inputDate}/>
);

export default InputDate;
   