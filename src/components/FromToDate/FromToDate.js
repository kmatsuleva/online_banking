import React from "react";
import Label from "../Label/Label";
import InputDate from '../InputTypeDate/InputDate'
import styles from "./styles"

const FromToDate = () => (
        <form style={styles.container}>
                <div style={styles.label}><Label labelValue = "From:"/></div>
                <InputDate />
                <div style={styles.label}><Label labelValue = "To:"/></div>
                <InputDate />
        </form>
);

export default FromToDate;     


