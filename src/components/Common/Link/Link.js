import React from "react";
import PropTypes from 'prop-types';     

const Link = ({links = [] , to, className }) => (
  <li>
    {links.map(text => {
      return  <a href={to} className={className}> { text } </a>
    })}
  </li>
);


Link.propTypes = {
  links: PropTypes.array,
  to: PropTypes.string,
  className: PropTypes.string     
};

export default Link;
