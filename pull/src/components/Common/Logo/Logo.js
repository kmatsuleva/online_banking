import React from "react";
import PropTypes from 'prop-types';     
import "./styles.css";

const Logo = ({ src, to, alt }) => (
    <div className = "logo">
        <a href = {to} > 
            <img src={src}
                alt = {alt}
                className="image"/>
        </a>
    </div>
);


Logo.propTypes = {
    src: PropTypes.string,
    to: PropTypes.string,
    alt: PropTypes.string
}

export default Logo;
