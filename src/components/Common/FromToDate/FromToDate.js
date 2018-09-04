import React from "react";
import styles from "./styles"

const FromToDate = ({min, max}) => (
        <form style={styles.container}>
                <label style={styles.label}>From: </label>
                <input type="date" min={min} style={styles.inputDate}/>
                <label style={styles.label}>To: </label>
                <input type="date" max={max} style={styles.inputDate}/>
        </form>
);

export default FromToDate;     


