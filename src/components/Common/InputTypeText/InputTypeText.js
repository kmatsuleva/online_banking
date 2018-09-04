import React from "react";
import PropTypes from 'prop-types';     

const InputTypeText = ({  style, placeholder, disabled }) => (
    <input type="text" style={style} placeholder={placeholder} disabled={disabled} />
);

InputTypeText.propTypes = {
    style: PropTypes.object,
    placeholder: PropTypes.string,
    disabled: PropTypes.string
};

InputTypeText.defaultProps = {
    style: {
        border: "1px solid #d2d2d2",
        padding: "8px 10px",
        marginTop: 8,
        marginBottom: 25,
        borderRadius: 3,
        height: 23,
        fontSize: 18,
        color: "#4a4a4a",
        boxShadow: "inset 1px 1px 2px rgba(0, 0, 0, 0.2)",
        width: 260
    }
}


export default InputTypeText;
 
