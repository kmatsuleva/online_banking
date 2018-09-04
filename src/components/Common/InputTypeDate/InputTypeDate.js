import React from "react";
import PropTypes from 'prop-types';     

const InputTypeDate = ({  min, max, style }) => (
    <input type="date" min={min} max = {max} style={style}/>  
);


InputTypeDate.propTypes = {
    min: PropTypes.string,
    max: PropTypes.string,
    style: PropTypes.object  
};

InputTypeDate.defaultProps = {
    style: {
        border: "1px solid #d2d2d2",
        padding: "8px 10px",
        marginTop: 8,
        marginBottom: 15,
        borderRadius: 3,
        height: 23,
        fontSize: 15,
        color: "#4a4a4a",
        boxShadow: "inset 1px 1px 2px rgba(0, 0, 0, 0.2)",
        width: 170,
        fontFamily: "Roboto, Arial, sans-serif"
    },

    min: "2018-01-01",
    max: "2022-01-01"
}



export default InputTypeDate;


