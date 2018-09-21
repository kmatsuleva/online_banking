import React from "react";
import PropTypes from 'prop-types';     

const PrimaryButton = ({ value, onClick, btnStyle, ref, disabled}) => (
  <input type = "button" value = {value} onClick = {onClick} style={btnStyle} ref={ref} disabled={disabled}/>
);


PrimaryButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  btnStyle: PropTypes.object
}

PrimaryButton.defaultProps = {
  btnStyle: {
    backgroundColor: "#46568e",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
    height: 40,
    marginTop: 10,
    borderRadius: 4,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
    fontFamily: "Roboto, Arial, sans-serif",
    color: "white"
  } 
};


export default PrimaryButton;



