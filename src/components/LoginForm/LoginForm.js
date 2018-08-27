import React from "react";
import Label from "../Label/Label"
import Input from "../Input/Input"
import Button from "../Button/Button"
import RequiredField from "../RequiredField/RequiredField"
import InputTypePassword from "../InputTypePassword/InputTypePassword.js"
import styles from "./styles";

const LoginForm = () => (
    <div style={styles.form}>
            <Label labelValue="User: " style={styles.label}/>
            <RequiredField text = "*" />
            <Input style={styles.input}/>
            <Label labelValue="Password: " style={styles.label}/>
            <RequiredField text = "*"/>
            <InputTypePassword style={styles.input}/>
            <Button 
                btnValue="Sign in"
            />
    </div>
);

export default LoginForm;