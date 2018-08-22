import React from "react";
import Menu from "../Menu/Menu";
import Form from "../Form/Form";
import RequiredField from "../RequiredField/RequiredField"
import Button from "../Button/Button";
import styles from "./styles.js"

const App = () => (
  <div>
    <Menu />
    <div style={styles.flexBoxContainer}>
      <div style={styles.homePageImg}>
        <img 
            src={require('../../images/home-page-img.jpg')} 
            style={styles.img}
        />
      </div>
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
    </div>
  </div>
);

export default App;
