import React from "react";
import PropTypes from 'prop-types';     

const Label = ({ text, style }) => (
  <label style= {style}> { text } </label>
);

Label.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object    
};


Label.defaultProps = {
  style: {
      fontSize: 18,
      color: "#4a4a4a",
      fontFamily: "Roboto, Arial, sans-serif"
  }
}


export default Label;
