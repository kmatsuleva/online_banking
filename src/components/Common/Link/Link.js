import React from "react";

const Link = ({links, to, style }) => (
  <li>
    {links.map(text => {
      return  <a href={to} style={style} > { text } </a>
    })}
  </li>
);

export default Link;
