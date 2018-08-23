import React from "react";
import styles from "./styles.js";
import Form from "../Form/Form";
import Button from "../Button/Button"
import RequiredField from "../RequiredField/RequiredField"

const LoginForm = () => (
    <div style={styles.form}>
        <Form 
            label="User: "
        />
        <RequiredField
            text = "*"
        />
        <Form 
            label="Password: " 
        />
        <RequiredField 
            text = "*"
        />
        <Button 
            btnValue="Sign in"
        />
    </div>
);

export default LoginForm;