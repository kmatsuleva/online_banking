import React from "react";
import styles from "./styles.js";
import Label from "../Label/Label"
import Input from "../Input/Input"
import Button from "../Button/Button"
import RequiredField from "../RequiredField/RequiredField"

const LoginForm = () => (
    <div style={styles.form}>
        <Label
            labelValue="User: "
        />
        <RequiredField
            text = "*"
        />
        <Input />
        <Label
            labelValue="Password: " 
        />
        <RequiredField 
            text = "*"
        />
        <Input />
        <Button 
            btnValue="Sign in"
        />
    </div>
);

export default LoginForm;