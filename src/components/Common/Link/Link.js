import React from "react";
import PropTypes from 'prop-types';     

const Link = ({links = [] , to, className }) => {
  return links.map(text => {
      return  <a href={to} className={className}> { text } </a>
  })
};


Link.propTypes = {
  links: PropTypes.array,
  to: PropTypes.string,
  className: PropTypes.string     
};

export default Link;
