import React from "react";
import PrimaryButton from "../../../../Common/PrimaryButton/PrimaryButton"
import RequiredField from "../../../../Common/RequiredField/RequiredField"
import styles from "./styles";

const LoginForm = () => (
    <div style={styles.form}>
            <label style={styles.label}>User: </label>
            <RequiredField text = "*" />
            <input type="text" style={styles.input}/>
            <label style={styles.label}>Password: </label>
            <RequiredField text = "*"/>
            <input type="password" style={styles.input}/>
            <PrimaryButton btnValue="Sign in"/>
    </div>
);

export default LoginForm;