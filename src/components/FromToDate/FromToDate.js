import React from "react";
import Label from "../Label/Label";
import InputDate from '../InputTypeDate/InputDate'
import styles from "./styles"

const FromToDate = () => (
        <form style={styles.container}>
                <Label labelValue = "From:" style={styles.label} />
                <InputDate min="2013-12-31"/>
                <Label labelValue = "To:" style={styles.label}/>
                <InputDate min="2013-12-31"/>
        </form>
);

export default FromToDate;     


