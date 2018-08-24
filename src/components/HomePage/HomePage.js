import React from "react";
import Menu from "../Menu/Menu";
import styles from "./styles.js";
import HomeImage from "../HomeImage/HomeImage";
import LoginForm from "../LoginForm/LoginForm";

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
