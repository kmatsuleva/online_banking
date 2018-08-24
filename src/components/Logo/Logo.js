import React from "react";
import styles from "./styles.js";

const Logo = ({ src }) => (
    <div style={styles.logo}>
        <img src={ src }
            style={styles.image}/>
    </div>
);

export default Logo;
