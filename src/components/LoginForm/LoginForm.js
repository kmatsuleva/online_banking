import React from "react";
import Label from "../Label/Label"
import Input from "../Input/Input"
import Button from "../Button/Button"
import RequiredField from "../RequiredField/RequiredField"
import InputTypePassword from "../InputTypePassword/InputTypePassword.js"
import styles from "./styles";

const LoginForm = () => (
    <div style={styles.form}>
        <div style={styles.flexContainer}>
            <Label labelValue="User: " style={styles.label}/>
            <RequiredField text = "*" />
        </div>
        <Input style={styles.input}/>
        <div style={styles.flexContainer}>
            <Label labelValue="Password: " style={styles.label}/>
            <RequiredField text = "*"/>
        </div>
        <InputTypePassword style={styles.inputPsw}/>
        <Button 
            btnValue="Sign in"
        />
    </div>
);

export default LoginForm;