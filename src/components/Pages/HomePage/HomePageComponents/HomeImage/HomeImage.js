import React from "react";
import styles from "./styles.js";

const HomeImage = () => (
    <div style={styles.homePageImg}>
        <img 
            src={require('../../../../../images/home-page-img.jpg')} 
            alt = "home_image"
            style={styles.img}
        />
    </div>

);

export default HomeImage;