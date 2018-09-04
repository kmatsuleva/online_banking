import React from "react";
import PropTypes from 'prop-types';     
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


Logo.propTypes = {
    src: PropTypes.string,
    to: PropTypes.string,
    alt: PropTypes.string
}

export default Logo;
