import React from "react";
import Menu from "../../Menus/Menu/Menu";
import styles from "./styles.js";
import HomeImage from "./HomePageComponents/HomeImage/HomeImage";
import LoginForm from "./HomePageComponents/LoginForm/LoginForm";

const HomePage = () => (
  <div>
    <Menu />
    <div style={styles.flexBoxContainer}>
        <HomeImage />
        <LoginForm />
    </div>
  </div>
);

export default HomePage;
