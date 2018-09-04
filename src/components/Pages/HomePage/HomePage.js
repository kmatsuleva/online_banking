import React from "react";
import Menu from "../../Menus/Menu/Menu";
import styles from "./styles.js";
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"
import RequiredField from "../../Common/RequiredField/RequiredField"
import Label from "../../Common/Label/Label"
import InputTypeText from "../../Common/InputTypeText/InputTypeText";
import InputTypePassword from "../../Common/InputTypePassword/InputTypePassword";

const HomePage = () => (
  <div>
    <Menu />
    <div style={styles.flexBoxContainer}>
        <div style={styles.homePageImg}>
            <img 
                src={require('../../../../src/images/home-page-img.jpg')} 
                alt = "home_image"
                style={styles.img}
            />
        </div>
        <div style={styles.form}>
                <Label text="User:" />
                <RequiredField />
                <InputTypeText />
                <Label text="Password:" />
                <RequiredField />
                <InputTypePassword />
                <PrimaryButton btnValue="Sign in" to="/accounts" onClick={this.componentDidMount}/>
        </div>
    </div>
  </div>
);

export default HomePage;
