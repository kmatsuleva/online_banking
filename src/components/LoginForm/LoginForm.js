import React from "react";
import styles from "./styles.js";
import Label from "../Label/Label"
import Input from "../Input/Input"
import Button from "../Button/Button"
import RequiredField from "../RequiredField/RequiredField"
// import GreetingHomePage from "../GreetingHomePage/GreetingHomePage"

const LoginForm = () => (
    <div style={styles.form}>
        <div style={styles.flexContainer}>
            {/* <GreetingHomePage text= "Hello"/> */}
            <Label
                labelValue="User: "
            />
            <RequiredField
                text = "*"
            />
        </div>
        <Input />
        <div style={styles.flexContainer}>
            <Label
                labelValue="Password: " 
            />
            <RequiredField 
                text = "*"
            />
        </div>
        <Input />
        <Button 
            btnValue="Sign in"
        />
    </div>
);

export default LoginForm;