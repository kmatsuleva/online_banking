import React from "react";
import styles from "./styles.js";

const Logo = ({ src, to, alt }) => (
    <div style={styles.logo}>
        <a href = {to} > 
            <img src={src}
                alt = {alt}
                style={styles.image}/>
        </a>
    </div>
);

export default Logo;
