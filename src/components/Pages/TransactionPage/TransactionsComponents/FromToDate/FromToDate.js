import React from "react";
import styles from "./styles"

const FromToDate = () => (
        <form style={styles.container}>
                <label style={styles.label}>From: </label>
                <input type="date" min="2013-12-31" style={styles.inputDate}/>
                <label style={styles.label}>To: </label>
                <input type="date" min="2013-12-31" style={styles.inputDate}/>
        </form>
);

export default FromToDate;     


