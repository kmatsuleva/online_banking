import React from "react";
import Label from "../Label/Label";
import InputDate from '../InputTypeDate/InputDate'
import styles from "./styles"

const FromToDate = () => (
        <form style={styles.container}>
                <Label labelValue = "From:"/>
                <InputDate />
                <Label labelValue = "To:"/>
                <InputDate />
        </form>
);

export default FromToDate;     


