import React from "react";
import PropTypes from 'prop-types';     

const Label = ({ text, className }) => (
  <label className= {className}> { text } </label>
);

Label.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object    
};



export default Label;
