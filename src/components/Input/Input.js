import React from "react";

const Input = ( {style, placeholder, disabled} ) => (
      <input type="text"
             style={style} 
             placeholder={placeholder} 
             disabled={disabled}
      />
);

export default Input;
 