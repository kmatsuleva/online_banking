import React from "react";
import PropTypes from 'prop-types';     

const Link = ({links = [] , to, style }) => (
  <li>
    {links.map(text => {
      return  <a href={to} style={style} > { text } </a>
    })}
  </li>
);


Link.propTypes = {
  links: PropTypes.element,
  to: PropTypes.string,
  style: PropTypes.object     
};

export default Link;
