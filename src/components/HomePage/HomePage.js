import React from "react";
import Menu from "../Menu/Menu";
import styles from "./styles.js";
import LoginForm from "../LoginForm/LoginForm";
import HomeImage from "../HomeImage/HomeImage";

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
