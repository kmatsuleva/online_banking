import React from "react";
import styles from "./styles.js";

const HomeImage = () => (
    <div style={styles.homePageImg}>
        <img 
            src={require('../../../../../images/home-page-img.jpg')} 
            style={styles.img}
        />
    </div>

);

export default HomeImage;