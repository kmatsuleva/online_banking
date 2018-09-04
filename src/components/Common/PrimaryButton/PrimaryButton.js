import React from "react";
import PropTypes from 'prop-types';     

const PrimaryButton = ({ btnValue, to, onClick, btnStyle, linkInButton }) => (
  <button style={btnStyle} onClick = {onClick}>
    <a href={to} style={linkInButton}> {btnValue} </a>
  </button>
);


PrimaryButton.propTypes = {
  btnValue: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  btnStyle: PropTypes.object,
  linkInButton: PropTypes.object
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
    fontFamily: "Roboto, Arial, sans-serif"
},

  linkInButton: {
      color: "white",
      textDecoration: "none"
  }
};


export default PrimaryButton;



