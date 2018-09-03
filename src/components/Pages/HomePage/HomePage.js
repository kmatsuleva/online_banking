import React from "react";
import Menu from "../../Menus/Menu/Menu";
import styles from "./styles.js";
import HomeImage from "./HomePageComponents/HomeImage/HomeImage";
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"
import RequiredField from "../../Common/RequiredField/RequiredField"

const HomePage = () => (
  <div>
    <Menu />
    <div style={styles.flexBoxContainer}>
        <HomeImage />
         <div style={styles.form}>
                <label style={styles.label}>User: </label>
                <RequiredField />
                <input type="text" style={styles.input}/>
                <label style={styles.label}>Password: </label>
                <RequiredField />
                <input type="password" style={styles.input}/>
                <PrimaryButton btnValue="Sign in" to="/accounts" onClick={this.componentDidMount}/>
            </div>
    </div>
  </div>
);

export default HomePage;
